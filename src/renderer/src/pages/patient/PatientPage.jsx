import PatientNavbar from '@renderer/components/patient/diseases/PatientNavbar';
import PatientIllnesses from '@renderer/components/patient/diseases/PatientIllnesses';

function PatientPage() {
  return (
    <div className="max-w-[1920px] px-3 mx-auto py-5">
      <PatientNavbar />
      <PatientIllnesses />
    </div>
  );
}

export default PatientPage;
