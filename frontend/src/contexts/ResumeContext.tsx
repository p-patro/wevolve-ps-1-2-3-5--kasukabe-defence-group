import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ParsedResume, sampleParsedResume } from '@/data/mockData';

interface ResumeContextType {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
  parsedResume: ParsedResume | null;
  setParsedResume: (resume: ParsedResume | null) => void;
  isVerified: boolean;
  setIsVerified: (verified: boolean) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [parsedResume, setParsedResume] = useState<ParsedResume | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  return (
    <ResumeContext.Provider value={{
      resumeFile,
      setResumeFile,
      parsedResume,
      setParsedResume,
      isVerified,
      setIsVerified
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
