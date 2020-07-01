import React from 'react'
import './App.css'
import Car from './Car/Car'
import { Button } from 'reactstrap';

class App extends React.Component {
  state = {
    setParam: [
      {
        src: 'https://www.wallpaperup.com/uploads/wallpapers/2020/03/10/1372979/236d41ef5153651a6cfb4b7b63143b96-1000.jpg',
        heading: 'BMW X6M Competition',
        description: 'Превосходство на любом покрытии: автомобили BMW X6 M демонстрируют свое доминирующее положение выдающими динамическими характеристиками, выразительным дизайном М и несравненной маневренностью. '
      },
      {
        src:'https://yandex.ru/images/_crpd/NStm15100/d43dbd7disZ2/V_AkyRgnnRR3fKyuB17zJYj0GYujzGylcropfWJGmTj92z9UYG9TCMFNpi2j04Zs2RO8eYAiZobfFoM-OBuXYhJABQycEsnBBkjoHocK0zUt8dzO8bt-VzHdK_4RkDqqXG_akRU7kpyFeqCQ',
        heading: 'Mercedes GLE 63 AMG',
        description: 'В апреле 2015 года на Нью-Йоркских смотринах автомобильной индустрии наряду со среднеразмерным кроссовером Mercedes-Benz GLE дебютировали и его экстремальные варианты – Mercedes-AMG GLE 63 и GLE 63 S.'
      },
      {
        src: 'https://picfiles.alphacoders.com/346/346352.jpg',
        heading: 'Audi Q8 RS',
        description: 'Новый Audi RS Q8 возглавляет семейство Q. Новая модель сочетает в себе характерную для моделей RS производительность, элегантность премиального купе и универсальность автомобилей класса SUV.'
      }
    ]
  }

  setParam = this.state.setParam
  
  clickHandlerRemove = () => {
    let i = 2;
    if((this.setParam.length - 1) > i) {
      this.setParam.pop()
      this.setState(() => {
        return {
          setParam: this.setParam
        }
      })
    }
  }

  randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  clickHandlerPush = () => {
    this.setParam.push(this.setParam[this.randomInteger(0, 2)])
    this.setState(() => {
      return {
        setParam: this.setParam
      }
    })
  }

  render() {
    let cars = []
    this.setParam.map(param => (
      cars.push(<Car src={param.src} heading={param.heading} description={param.description}/> )
    ))
    return(
      <>
        <div className='cards'>
          <div className='buttons'>
            <Button outline color="danger" className="submit_2" onClick={this.clickHandlerRemove}>Удалить card</Button>
            <Button outline color="danger" className="submit_2" onClick={this.clickHandlerPush}>Добавить card</Button>
            <Button color="success" className="submit_2">{this.setParam.length}</Button>{' '}
          </div>
          <div className='cars'>
            {cars}
          </div>   
        </div>
      </>
    )
  }
}

export default App;
  
