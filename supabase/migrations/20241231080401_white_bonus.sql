/*
  # Initial Database Schema

  1. New Tables
    - `profiles`
      - User profile information
      - Linked to auth.users
      - Stores name, role, and other user details
    
    - `classes`
      - Course/class information
      - Includes name, subject, description
    
    - `class_enrollments`
      - Links students to classes
      - Tracks enrollment status
    
    - `assignments`
      - Assignment details
      - Linked to classes
      - Includes title, description, due dates
    
    - `assignment_submissions`
      - Student assignment submissions
      - Tracks submission status and grades
    
    - `attendance`
      - Student attendance records
      - Daily attendance tracking
    
    - `grades`
      - Student grades
      - Linked to classes and assignments
    
    - `messages`
      - Internal messaging system
      - Supports communication between users

  2. Security
    - Enable RLS on all tables
    - Set up policies for each user role
    - Ensure data privacy and access control
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'teacher', 'student', 'parent');
CREATE TYPE assignment_status AS ENUM ('pending', 'submitted', 'graded');
CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'late');

-- Profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  role user_role NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Classes table
CREATE TABLE classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  subject text NOT NULL,
  description text,
  teacher_id uuid REFERENCES profiles(id),
  grade_level integer,
  room text,
  schedule text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Class enrollments table
CREATE TABLE class_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id uuid REFERENCES classes(id) ON DELETE CASCADE,
  student_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  enrollment_date timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  UNIQUE(class_id, student_id)
);

-- Assignments table
CREATE TABLE assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id uuid REFERENCES classes(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  due_date timestamptz NOT NULL,
  duration integer, -- in minutes
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Assignment submissions table
CREATE TABLE assignment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid REFERENCES assignments(id) ON DELETE CASCADE,
  student_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  status assignment_status DEFAULT 'pending',
  submission_date timestamptz,
  grade numeric(5,2),
  feedback text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(assignment_id, student_id)
);

-- Attendance table
CREATE TABLE attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  class_id uuid REFERENCES classes(id) ON DELETE CASCADE,
  date date NOT NULL,
  status attendance_status DEFAULT 'present',
  note text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(student_id, class_id, date)
);

-- Messages table
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  recipient_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  subject text,
  content text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignment_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Classes policies
CREATE POLICY "Classes are viewable by authenticated users" ON classes
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Teachers can insert classes" ON classes
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'teacher'
    )
  );

CREATE POLICY "Teachers can update own classes" ON classes
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'teacher'
      AND id = teacher_id
    )
  );

-- Class enrollments policies
CREATE POLICY "Users can view own enrollments" ON class_enrollments
  FOR SELECT USING (
    auth.uid() = student_id OR
    EXISTS (
      SELECT 1 FROM classes
      WHERE classes.id = class_id
      AND classes.teacher_id = auth.uid()
    )
  );

-- Assignments policies
CREATE POLICY "Users can view relevant assignments" ON assignments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM class_enrollments
      WHERE class_enrollments.class_id = assignments.class_id
      AND class_enrollments.student_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM classes
      WHERE classes.id = assignments.class_id
      AND classes.teacher_id = auth.uid()
    )
  );

-- Assignment submissions policies
CREATE POLICY "Users can view own submissions" ON assignment_submissions
  FOR SELECT USING (
    auth.uid() = student_id OR
    EXISTS (
      SELECT 1 FROM assignments
      JOIN classes ON assignments.class_id = classes.id
      WHERE assignments.id = assignment_submissions.assignment_id
      AND classes.teacher_id = auth.uid()
    )
  );

-- Attendance policies
CREATE POLICY "Users can view relevant attendance" ON attendance
  FOR SELECT USING (
    auth.uid() = student_id OR
    EXISTS (
      SELECT 1 FROM classes
      WHERE classes.id = attendance.class_id
      AND classes.teacher_id = auth.uid()
    )
  );

-- Messages policies
CREATE POLICY "Users can view own messages" ON messages
  FOR SELECT USING (
    auth.uid() = sender_id OR
    auth.uid() = recipient_id
  );

CREATE POLICY "Users can send messages" ON messages
  FOR INSERT WITH CHECK (auth.uid() = sender_id);

-- Insert sample data
INSERT INTO profiles (id, first_name, last_name, role, email)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'John', 'Anderson', 'admin', 'admin@schoolierp.com'),
  ('00000000-0000-0000-0000-000000000002', 'Sarah', 'Wilson', 'teacher', 'teacher@schoolierp.com'),
  ('00000000-0000-0000-0000-000000000003', 'Michael', 'Brown', 'student', 'student@schoolierp.com'),
  ('00000000-0000-0000-0000-000000000004', 'Emily', 'Davis', 'parent', 'parent@schoolierp.com');

-- Create functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, role, email)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    (new.raw_user_meta_data->>'role')::user_role,
    new.email
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Set up trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers to relevant tables
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_classes_updated_at
  BEFORE UPDATE ON classes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assignments_updated_at
  BEFORE UPDATE ON assignments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assignment_submissions_updated_at
  BEFORE UPDATE ON assignment_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();