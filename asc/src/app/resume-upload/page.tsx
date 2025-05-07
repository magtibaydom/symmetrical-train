'use client';

import ProcessOverview from '@/components/upload-resume/ProcessOverview';
import UploadForm from '@/components/upload-resume/UploadForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResumeUploadPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ProcessOverview />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">Submit Your Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <UploadForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
