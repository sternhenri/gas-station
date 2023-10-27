import Head from 'next/head';
import Link from "next/link";
import TextInputForm from '../components/textinputform';

export default function fillUpPage() {
  return (
    <div className="App">
      <h1>Text Input Form</h1>
        <TextInputForm />
      <Link href="/claim-gas-pass">
        <a>Got a gas pass? Log in to use it.</a>
      </Link>

    </div>
  )
}