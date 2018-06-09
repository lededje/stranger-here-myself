import React from 'react'

import styles from './base.css'

import Phrase from '../containers/Phrase'
import LanguagePicker from '../containers/LanguagePicker'

import Title from '../components/Title'
import PhraseGroup from '../components/PhraseGroup'
import PhraseSpacer from '../components/PhraseSpacer'
import withRedux from '../components/withRedux'

class Index extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>

        <LanguagePicker />

        <Title>Basics</Title>

        <PhraseGroup>
          <Phrase english="Hello" japanese="Kon'nichiwa" syllabary="こんにちは" />
          <Phrase english="Goodbye" japanese="Sayōnara" syllabary="さようなら" />
          <PhraseSpacer />
          <Phrase english="Yes" japanese="Hai" syllabary="はい" />
          <Phrase english="No" japanese="Īe" syllabary="いいえ" />
        </PhraseGroup>

        <Title>Numbers</Title>

        <PhraseGroup>
          <Phrase english="1" japanese="Ichi" syllabary="一" />
          <Phrase english="2" japanese="Ni" syllabary="二" />
          <Phrase english="3" japanese="San" syllabary="三" />
          <Phrase english="4" japanese="Shi" syllabary="四" />
          <Phrase english="5" japanese="Go" syllabary="五" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase english="6" japanese="Roku" syllabary="六" />
          <Phrase english="7" japanese="Shichi" syllabary="セ" />
          <Phrase english="8" japanese="Hachi" syllabary="八" />
          <Phrase english="9" japanese="Kyuu" syllabary="九" />
          <Phrase english="10" japanese="Juu" syllabary="十" />
        </PhraseGroup>

        <Title>Transport</Title>
        <PhraseGroup>
          <Phrase english="Train" japanese="Ressha" syllabary="列車" />
          <Phrase english="Tram" japanese="Toramu" syllabary="トラム" />
          <Phrase english="Bus" japanese="Basu" syllabary="バス" />
          <Phrase english="Station" japanese="Eki" syllabary="駅" />
        </PhraseGroup>

        <Title>Foods</Title>
        <PhraseGroup>
          <Phrase english="Vegetable" japanese="Yasai" syllabary="野菜" />
          <Phrase english="Chicken" japanese="Chikin" syllabary="チキン" />
          <Phrase english="Beef" japanese="Gyūniku" syllabary="牛肉" />
          <Phrase english="Pork" japanese="Butaniku" syllabary="豚肉" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase english="Fish" japanese="Ressha" syllabary="魚" />
          <Phrase english="Duck" japanese="Ahiru" syllabary="アヒル" />
          <Phrase english="Shrimp" japanese="Ebi" syllabary="エビ" />
          <Phrase english="Rice" japanese="Gohan" syllabary="ご飯" />
          <Phrase english="Water" japanese="Mizu" syllabary="水" />
        </PhraseGroup>

        <Title>Common Phrases</Title>
        <PhraseGroup>
          <Phrase english="I don't need a bag" japanese="Watashi wa baggu ga hitsuyō nai" syllabary="私はバッグが必要ない" />
        </PhraseGroup>
      </div>
    )
  }
}

export default withRedux(Index)
