import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
User_STATUS_CLASS_MAP,
User_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import TasksTable from "../Task/TasksTable";
export default function Show({ auth, success, User, tasks, queryParams }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`User "${User.name}"`}
                </h2>
                <Link
                href={route("User.edit", User.id)}
                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                >
                Edit
                </Link>
            </div>
            }
        >
            <Head title={`User "${User.name}"`} />
            <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div>
                    <img
                    src={User.image_path}
                    alt=""
                    className="w-full h-64 object-cover"
                    />
                </div>
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <div className="grid gap-1 grid-cols-2 mt-2">
                    <div>
                        <div>
                        <label className="font-bold text-lg">User ID</label>
                        <p className="mt-1">{User.id}</p>
                        </div>
                        <div className="mt-4">
                        <label className="font-bold text-lg">User Name</label>
                        <p className="mt-1">{User.name}</p>
                        </div>

                        <div className="mt-4">
                        <label className="font-bold text-lg">User Status</label>
                        <p className="mt-1">
                            <span
                            className={
                                "px-2 py-1 rounded text-white " +
                                User_STATUS_CLASS_MAP[User.status]
                            }
                            >
                            {User_STATUS_TEXT_MAP[User.status]}
                            </span>
                        </p>
                        </div>
                        <div className="mt-4">
                        <label className="font-bold text-lg">Created By</label>
                        <p className="mt-1">{User.createdBy.name}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        <label className="font-bold text-lg">Due Date</label>
                        <p className="mt-1">{User.due_date}</p>
                        </div>
                        <div className="mt-4">
                        <label className="font-bold text-lg">Create Date</label>
                        <p className="mt-1">{User.created_at}</p>
                        </div>
                        <div className="mt-4">
                        <label className="font-bold text-lg">Updated By</label>
                        <p className="mt-1">{User.updatedBy.name}</p>
                        </div>
                    </div>
                    </div>

                    <div className="mt-4">
                    <label className="font-bold text-lg">User Description</label>
                    <p className="mt-1">{User.description}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="pb-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <TasksTable
                    tasks={tasks}
                    success={success}
                    queryParams={queryParams}
                    hideUserColumn={true}
                    />
                </div>
                </div>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}