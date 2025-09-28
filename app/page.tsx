import { createUser } from "@/lib/actions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="text-gray-700">
        Welcome to your lightweight CRM. Start by adding some leads or checking your pipeline.
      </p>
      <AddUserForm />
    </div>
  );
}

const AddUserForm = () => {
  return (
    <form
      action={createUser}
      className="border max-w-xl w-full h-fit p-4 mx-4 flex flex-col items-center gap-4 border-gray-300 rounded"
    >
      <h2 className="text-center text-3xl font-bold">Create New User</h2>
      <label className="flex flex-col gap-2">
        Enter Email:
        <input
          type="email"
          name="email"
          placeholder="example@google.com"
          className="p-2 border rounded"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        Enter Name (optional):
        <input type="text" name="name" className="p-2 border rounded" />
      </label>
      <button
        className="px-4 py-2 border rounded-lg hover:cursor-pointer hover:shadow transition-all ease-in-out duration-150 hover:bg-black hover:text-white font-bold"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
};
