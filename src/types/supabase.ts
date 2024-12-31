export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
          role: 'admin' | 'teacher' | 'student' | 'parent'
          email: string
          phone: string | null
          address: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name: string
          last_name: string
          role: 'admin' | 'teacher' | 'student' | 'parent'
          email: string
          phone?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          role?: 'admin' | 'teacher' | 'student' | 'parent'
          email?: string
          phone?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          subject: string
          description: string | null
          teacher_id: string
          grade_level: number | null
          room: string | null
          schedule: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          subject: string
          description?: string | null
          teacher_id: string
          grade_level?: number | null
          room?: string | null
          schedule?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          subject?: string
          description?: string | null
          teacher_id?: string
          grade_level?: number | null
          room?: string | null
          schedule?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      class_enrollments: {
        Row: {
          id: string
          class_id: string
          student_id: string
          enrollment_date: string
          status: string
        }
        Insert: {
          id?: string
          class_id: string
          student_id: string
          enrollment_date?: string
          status?: string
        }
        Update: {
          id?: string
          class_id?: string
          student_id?: string
          enrollment_date?: string
          status?: string
        }
      }
      assignments: {
        Row: {
          id: string
          class_id: string
          title: string
          description: string | null
          due_date: string
          duration: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          title: string
          description?: string | null
          due_date: string
          duration?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          title?: string
          description?: string | null
          due_date?: string
          duration?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      assignment_submissions: {
        Row: {
          id: string
          assignment_id: string
          student_id: string
          status: 'pending' | 'submitted' | 'graded'
          submission_date: string | null
          grade: number | null
          feedback: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          assignment_id: string
          student_id: string
          status?: 'pending' | 'submitted' | 'graded'
          submission_date?: string | null
          grade?: number | null
          feedback?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          assignment_id?: string
          student_id?: string
          status?: 'pending' | 'submitted' | 'graded'
          submission_date?: string | null
          grade?: number | null
          feedback?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      attendance: {
        Row: {
          id: string
          student_id: string
          class_id: string
          date: string
          status: 'present' | 'absent' | 'late'
          note: string | null
          created_at: string
        }
        Insert: {
          id?: string
          student_id: string
          class_id: string
          date: string
          status?: 'present' | 'absent' | 'late'
          note?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          class_id?: string
          date?: string
          status?: 'present' | 'absent' | 'late'
          note?: string | null
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          subject: string | null
          content: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          recipient_id: string
          subject?: string | null
          content: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          recipient_id?: string
          subject?: string | null
          content?: string
          read?: boolean
          created_at?: string
        }
      }
    }
  }
}