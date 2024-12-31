import { Link } from 'react-router-dom';
import { School, BookOpen, Users, TrendingUp, MessageSquare, Shield, Globe, Award } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';

export function Landing() {
  const features = [
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Efficiently manage courses, assignments, and grades all in one place.',
    },
    {
      icon: Users,
      title: 'User Roles',
      description: 'Dedicated portals for administrators, teachers, students, and parents.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor academic progress with detailed analytics and reports.',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Seamless communication between teachers, students, and parents.',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security to protect sensitive educational data.',
    },
    {
      icon: Globe,
      title: 'Accessible Anywhere',
      description: 'Access your school management system from any device, anywhere.',
    },
  ];

  const stats = [
    { value: '99%', label: 'User Satisfaction' },
    { value: '500+', label: 'Schools Trust Us' },
    { value: '1M+', label: 'Active Users' },
    { value: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      content: "SchoolIERP has transformed how we manage our educational institution. It's intuitive and comprehensive.",
      author: "Sarah Wilson",
      role: "School Principal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "The platform has made it so much easier to track my children's progress and communicate with teachers.",
      author: "Michael Chen",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "As a teacher, I love how streamlined the grading and assignment management process has become.",
      author: "Emily Rodriguez",
      role: "High School Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <AuthLayout>
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 mix-blend-multiply" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-900 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
                Welcome to <span className="text-indigo-200">SchoolIERP</span>
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto animate-slide-up">
                An integrated education management system that streamlines school operations
                and enhances learning experiences.
              </p>
              <div className="mt-10 flex justify-center gap-4 animate-fade-in-up">
                <Link
                  to="/login"
                  className="rounded-md bg-white px-8 py-4 text-base font-medium text-indigo-600 hover:bg-indigo-50 transition-all transform hover:scale-105"
                >
                  Get Started
                </Link>
                <a
                  href="#features"
                  className="rounded-md bg-indigo-500 px-8 py-4 text-base font-medium text-white hover:bg-indigo-400 transition-all transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Decorative blob shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Comprehensive School Management
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to manage your educational institution effectively
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex justify-center">
                      <feature.icon className="h-12 w-12 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Trusted by Educators Worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Here's what our users have to say about SchoolIERP
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.author}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Ready to Transform Your School Management?
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Join thousands of schools that trust SchoolIERP for their management needs.
              </p>
              <div className="mt-8">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Landing;