'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { createNote, } from './action'

const initialState = {
  message: '',
  errors: {
    title: '',
    description: '',
  },
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="px-6 py-2 text-white font-bold rounded-md bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 cursor-pointer"
    >
      Submit
    </button>
  )
}

export default function CreateForm() {

  const [state, formAction] = useActionState(createNote, initialState)
  return (
    <div className="max-w mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 sticky top-0">
      <h2 className="text-xl font-semibold mb-4 text-center">Create Note</h2>
      <form className="space-y-4" action={formAction}>
        <div className="flex flex-col gap-4 content-center">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Input title ..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm hover:bg-blue-50 focus:ring-blue-400 focus:border-blue-400 p-2"
            />
            {state.errors && typeof state.errors === 'object' && (
              <small className="text-red-500">{state.errors?.title}</small>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Input description ..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm hover:bg-blue-50 focus:ring-blue-500 focus:border-blue-500 p-2"
            />
            {state.errors && typeof state.errors === 'object' && (
              <small className="text-red-500">
                {state.errors?.description}
              </small>
            )}
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
