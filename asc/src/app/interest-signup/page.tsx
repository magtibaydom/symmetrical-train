'use client';

import { useState } from 'react';
import RoleSelector from '@/components/signup/RoleSelector';
import MentorField from '@/components/signup/MentorField';
import LearnerField from '@/components/signup/LearnerField';
import EmailField from '@/components/signup/EmailField';
import PrivacyCheckbox from '@/components/signup/PrivacyCheckbox';
import SubmitButton from '@/components/signup/SubmitButton';
import { supabase } from '@/lib/supabaseClient';
import { ModeToggle } from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import CharacterCounter from '@/components/ui/CharacterCounter';

export default function SignupPage() {
  const [role, setRole] = useState<'mentor' | 'learner'>('mentor');
  const [teach, setTeach] = useState('');
  const [learn, setLearn] = useState('');
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [language, setLanguage] = useState<'en' | 'tl'>('en');
  const [emailValid, setEmailValid] = useState(true);

  const handleRoleChange = (newRole: 'mentor' | 'learner') => {
    setRole(newRole);
  };

  const handleLanguageChange = (newLanguage: 'en' | 'tl') => {
    setLanguage(newLanguage);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    const isEmailValid = validateEmail(email);
    setEmailValid(isEmailValid);

    if (!email || !privacy || !isEmailValid) {
      alert('Please fill in all fields, enter a valid email, and accept the privacy policy.');
      return;
    }

    const formData = {
      role,
      mentor_interest: teach,
      learner_interest: learn,
      email,
      privacy,
    };

    try {
      const { data, error } = await supabase.from('signups').insert([formData]);
      if (error) throw error;
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md border bg-card">
        <div className="mb-4 flex justify-between">
          <ModeToggle />
          <LanguageToggle onLanguageChange={handleLanguageChange} />
        </div>
        <h1 className="text-2xl font-semibold mb-2 text-center pt-4">After School Study Club</h1>
        <h2 className="text-l font-normal mb-6 text-center">Let's figure it out together. No homeworks!</h2>

        <RoleSelector onRoleChange={handleRoleChange} />

        <MentorField value={teach} onChange={(e) => setTeach(e.target.value)} />
        <CharacterCounter value={teach} maxLength={200} />

        <LearnerField value={learn} onChange={(e) => setLearn(e.target.value)} />
        <CharacterCounter value={learn} maxLength={200} />

        <EmailField value={email} onChange={(val) => setEmail(val)} />
        {!emailValid && (
          <div className="text-red-500 text-sm mb-2">Please enter a valid email address.</div>
        )}

        <PrivacyCheckbox checked={privacy} onChange={setPrivacy} />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  );
}
