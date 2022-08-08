import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import CategorizedRecipeList from '../components/categorized-recipe-list'

import '../assets/css/fonts.css'
import '../assets/css/racikan.scss'

class BigText extends React.Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }
  render() {
    return <p className='cute-title'>{this.text}</p>
  }
}

class BaseImage extends React.Component {
  constructor(props) {
    super(props)
    this.src = props.src
    this.alt = props.alt
    this.title = props.title
  }

  render() {
    return <img src={this.src} alt={this.alt} title={this.title || this.alt} />
  }
}

const Tips = () => {
  return (
    <p className='info tips'>
      <strong>FYI:</strong> Kalian juga bisa estimasikan harga/biaya racikan
      item di Warnet Life dengan tekan &amp; tahan item pada resep racikan.
    </p>
  )
}

const Heading = () => {
  return (
    <header>
      <h1 id='title'>Warnet Life Racikan Penyihir</h1>
      <BigText text='Hai cinta, selamat datang di rumahku!' />
      <p className='cute'>Mau racik resep apa hari ini?</p>
    </header>
  )
}

const InfoRacikan = () => {
  return (
    <div id='info-racikan'>
      <BigText text='Buka jam 00:00-03:00' />
      <div className='tablet'>
        <BaseImage src={'images/resep.apk.png'} alt='resep.apk di tablet' />
      </div>
      <p className='cute'>
        Butuh resep lebih lengkap? Kunjungi <strong>"Resep.apk"</strong> di
        tablet kesayangan anda!
      </p>
      <Tips />
    </div>
  )
}

const WitchFanart = () => {
  return (
    <div className='witch-fanart'>
      <BaseImage src={'images/fanart-penyihir.png'} alt='penyihir fanart' />
    </div>
  )
}

const CopyrightInfo = () => {
  const emoji = `(🧊🍹🐰)`
  return (
    <div id='copyright'>
      &copy; 2022 Akhir Pekan Studio, dibuat oleh <strong>EsTehBunny</strong>{' '}
      {emoji}
      <br />
      untuk referensi game <strong>Warnet Life</strong>.
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <InfoRacikan />
      <WitchFanart />
      <CopyrightInfo />
      <p>-- Powered by Gatsby + React.js --</p>
    </footer>
  )
}

const IndexPage = () => {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <Heading />
      <CategorizedRecipeList />
      <Footer />
    </main>
  )
}

export default IndexPage
