import AppointmentForm from "@/components/forms/AppoinmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new-appointment", patient.name);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-4 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
            // @ts-ignore
            setOpen={() => {}}
          />

          <p className="copyright mt-10 py-12">© 2024 CareFlow</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img4.jpg"
        height={1000}
        width={1000}
        alt="Appointment"
        className="side-img max-w-[600px] bg-bottom"
      />
    </div>
  );
}
