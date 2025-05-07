'use client';

import ProcessOverview from '@/components/upload-resume/ProcessOverview';
import UploadForm from '@/components/upload-resume/UploadForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ModeToggle } from '@/components/ui/ThemeToggle';
import Navbar from '@/components/ui/PlatformNavBar';

export default function ResumeUploadPage() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="container mx-auto py-10 px-0 md:px-4">

        <Card className="shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='flex flex-column items-center'>
            <CardContent>
              <ProcessOverview />
            </CardContent>
          </div>
          <div>
            <CardHeader>
              <CardTitle className="text-center text-xl">Submit Your Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <UploadForm />
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}
