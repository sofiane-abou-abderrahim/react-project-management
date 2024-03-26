import NewTask from './NewTask.jsx';

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        This project does not have any task yet.
      </p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100"></ul>
    </section>
  );
}
