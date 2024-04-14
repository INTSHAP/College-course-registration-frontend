export default function CourseHeading() {
  return (
    <header className="flex justify-between items-center bg-slate-200 shadow-sm p-2 md:p-5 w-full capitalize">
      <h3>Code</h3>
      <h3 className="hidden md:visible">title</h3>
      <h3>creditUnit</h3>
      <h3>status</h3>
      <h3>fee</h3>
    </header>
  );
}
