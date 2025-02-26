"use client"
// import { useCount } from "@/context"
import { dataStore } from "@/store/dataStore"
export default function About() {
    const { inc } = dataStore()
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-3xl font-bold">About Page</h1>
            <button 
                onClick={() => inc()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Count ++
            </button>
        </div>
    )
}