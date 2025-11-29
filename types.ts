import React from 'react';

export interface JobPost {
  id: string;
  title: string;
  category: 'new_grad' | 'mid_career';
  location: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface EmployeeVoice {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  description: string;
}

export interface BusinessDomain {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}