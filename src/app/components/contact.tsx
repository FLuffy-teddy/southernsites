import { ContactForm } from "./form";

export default function Contact() {
  return (
    <div className="flex flex-col items-center py-24 w-1/2 m-auto">
      <h2 className="text-4xl">Contact</h2>
      <ContactForm />
    </div>
  );
}
