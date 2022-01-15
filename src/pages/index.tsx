import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fwywd_lp_teamB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <img src='entre.png' width='1440' />
        </div>
        <h2 className='mt-10 ml-5 text-4xl'>実際の活動</h2>
        <div className='flex justify-evenly'>
          <div>
            <h4 className='flex justify-center text-3xl'>1.ビジネス力×技術力の強化</h4>
            <h3 className='flex justify-center'>起業家に必要な影響力、資本力、技術力の強化</h3>
            <div className='flex justify-evenly items-center'>
              <div className=' my-10 mx-5'>
                <h3 className='flex justify-center text-2xl'>01影響力</h3>
                <img src='1.png' width='150' />
                <p>
                  情報発信により
                  <br />
                  多くのファンが生まれ
                  <br />
                  良質な顧客を獲得
                </p>
              </div>
              <div className=' my-10 mx-5'>
                <h3 className='flex justify-center text-2xl'>02資本力</h3>
                <img src='2.png' width='150' />
                <p>
                  ビジネスモデルの
                  <br />
                  立案・仮説検証から、
                  <br />
                  マネタイズまで実践
                </p>
              </div>
              <div className=' my-10 mx-5'>
                <h3 className='flex justify-center -ml-5 text-2xl'>03技術力</h3>
                <img src='3.png' width='150' />
                <p>
                  AIなどの最新技術を
                  <br />
                  駆使して、プロトタイプを
                  <br />
                  開発技術習得
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='flex justify-center text-3xl'>2.熱意が高い仲間とのつながり</h4>
            {/* ここにcomunication2の画像を挿入 */}
          </div>
        </div>
      </main>
    </div>
  );
}
