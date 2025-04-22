import Link from 'next/link';
import { Form } from "@/components/email-form";
import { Button } from '@/components/button';

export default function SendPage() {
  return (
    <>
      <Button />
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <section className="py-24">
          <div className="container">
            <h1 className="text-3xl font-bold text-center">Send an email!</h1>
          </div>
        </section>
        <Form />
      </div>
    </>
  );
}