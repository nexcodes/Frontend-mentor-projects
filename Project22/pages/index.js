import Head from 'next/head'
import react , {useState , useEffect} from 'react'

export default function Home() {
  const [id, setId] = useState(0);
  const [quote, setQuote] = useState('');
  const [btn, setBtn] = useState(0);
  const [count, setCount] = useState(0);
  const generateNewQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setId(data.slip.id);
        setQuote(data.slip.advice);
      });
  };
  useEffect(() => {
    generateNewQuote();
  }, []);
  return (
    <>
      <Head><title>Advice app generator - ProjectsByDailyReadingAdmin</title></Head>
      <main className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
        <div className='mx-4 md:mx-0 md:w-1/3 bg-gray-700 flex flex-col justify-center items-center rounded-lg relative'>
          <h6 className='text-[#52ffa8] font-light font text-xs mt-12 tracking-[0.4em] text-center'>ADVICE #{id}</h6>
          <p className='text-gray-300 font font-bold mx-4 my-4 text-center text-xl'>❝{quote}❞</p>
          <picture>
            <source media="(max-width: 768px)" srcSet='/images/pattern-divider-mobile.svg' />
            <img src="/images/pattern-divider-desktop.svg" alt="" />
          </picture>
          <div className='mt-12'></div>
          <div className='absolute -bottom-8'>
            <picture>
              <div onClick={generateNewQuote} className='cursor-pointer shadow-2xl hover:shadow-[#3afc9b] duration-300 ease-in p-4 bg-[#52ffa8] rounded-full'>
                <img src="/images/icon-dice.svg" alt="" />
              </div>
            </picture>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.adviceslip.com/advice`)
  // const data = await res
  console.log(res)

  return { props: {  } }
}