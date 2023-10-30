import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
// const API_KEY = 'AIzaSyD5jd1PhKwr78AVXuvNkIufDcdMa3HfPCg'

import Smile from '../../assets/imgs/smile.png'
import Verified from '../../assets/imgs/verifed.png'
import Xmark from '../../assets/svgs/xmark.svg'
import Step from '../../assets/imgs/step.png'
import Elevator from '../../assets/imgs/elevator.png'
import Park from '../../assets/imgs/park.png'
import Toilet from '../../assets/imgs/toilet.png'
import Block from '../../assets/imgs/block.png'
import Notice from '../../assets/imgs/notice.png'
import Send from '../../assets/imgs/send.png'
import New from '../../assets/imgs/new.png'
import Glass from '../../assets/glass.svg'

export default function KakaoMap(props: any) {
  const [map, setMap] = useState(null as any)
  const [selected, setSelected] = useState(false)
  const [created, setCreated] = useState(false)
  const [markerInfo, setMarkerInfo] = useState('')
  const [selectedMarker, setSelectedMarker] = useState<any>({})
  const [newM, setNewM] = useState({ latitude: 0, longitude: 0 })

  const getMap = async () => {
    const container = document.getElementById('map') as HTMLElement
    const options = { center: new kakao.maps.LatLng(props.coords.latitude, props.coords.longitude), level: 4, disableDoubleClickZoom: true }
    const kakaoMap = new kakao.maps.Map(container, options)
    setMap(kakaoMap)

    let places: any[] = [
      {
        id: '1',
        placeName: '덕남마을 산책로',
        latitude: 35.166622693316,
        longitude: 128.161152360212
      },
      {
        id: '2',
        placeName: '남강댐 노을공원',
        latitude: 35.1617049807277,
        longitude: 128.032023977969
      }
    ]

    places.forEach((el: { id: '', placeName: '', latitude: 0, longitude: 0 }) => {
      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(el.latitude, el.longitude),
        image: new kakao.maps.MarkerImage(Verified, new kakao.maps.Size(32, 45)),
      })

      kakao.maps.event.addListener(marker, 'click', async () => {
        setSelected(true)
        setSelectedMarker(el)
      })

      kakao.maps.event.addListener(kakaoMap, 'click', () => {
        setSelected(false)
        setSelectedMarker({})
      })
    })

    // Current my location
    new kakao.maps.Marker({
      map: kakaoMap,
      position: new kakao.maps.LatLng(props.coords.latitude, props.coords.longitude),
      image: new kakao.maps.MarkerImage(Smile, new kakao.maps.Size(40, 53)),
    })

    kakao.maps.event.addListener(kakaoMap, 'dblclick', function (event: { latLng: { La: number, Ma: number } }) {
      const latlng = event.latLng

      new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(latlng.Ma, latlng.La),
        image: new kakao.maps.MarkerImage(New, new kakao.maps.Size(40, 53)),
      })

      setNewM({ latitude: latlng.Ma, longitude: latlng.La })
      setCreated(true)
    })
  }

  const createMarker = (placeName: string, latitude: number, longitude: number) => {
    console.log(placeName, latitude, longitude)
    window.location.href = '/map'
  }

  useEffect(() => {
    getMap()
  }, [])

  return (
    <Fragment>
      {selected || created ?
        <div className={`animatedBG fixed z-50 w-screen h-screen lg:hidden md:hidden`} onClick={() => { setSelected(false) }} />
        : null}

      {selected ?
        <div className={`animated overflow-y-auto rounded-t-[20px] fixed z-50 flex flex-col justify-start items-center shadow-2xl bg-white/70 backdrop-blur-xl md:w-[400px] lg:w-[400px] w-screen lg:h-screen md:h-screen h-[50%] mt-[120%] lg:mt-0 md:mt-0 p-4`}>
          <div className={'w-full flex justify-end mb-8'}><img className={'w-5 h-5'} src={Xmark} onClick={() => { setSelected(false) }} /></div>

          <p className={'text-2xl font-bold flex-wrap[600] mb-8'}>{selectedMarker.placeName}</p>

          <div className={'w-full flex flex-wrap items-center justify-center'}>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>경사로</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img src={Step} />
              </button>
            </div>

            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>엘리베이터</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img className={'w-6'} src={Elevator} />
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>전용 주차장</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Park} /></button>
            </div>
          </div>
          <div className={'w-full flex flex-wrap items-center justify-center mb-12'}>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>전용 화장실</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Toilet} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 블록</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Block} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 안내도</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Notice} /></button>
            </div>
          </div>

          <p className={'w-[250px] text-[#9D61FE] font-bold mb-2'}>Review</p>
          <div className={'flex items-center justify-center mb-[100px]'}>
            <input type="text" className={'w-68 h-12 mr-2 rounded-full drop-shadow-xl p-4 outline-none'} placeholder='정확한 정보를 작성해주세요.' />
            <button className={'w-10 h-10 rounded-full drop-shadow-xl bg-[#9D61FE] flex items-center justify-center cursor-pointer'} onClick={() => console.log('click')}>
              <img className={'w-4 h-4'} src={Send} />
            </button>
          </div>
        </div>
        : <div className={`unanimated overflow-y-auto rounded-t-[20px] fixed z-50 flex flex-col justify-start items-center shadow-2xl bg-white/70 backdrop-blur-xl md:w-[400px] lg:w-[400px] w-screen lg:h-screen md:h-screen h-[50%] mt-[120%] lg:mt-0 md:mt-0 p-4`}>
          <div className={'w-full flex justify-end mb-8'}><img className={'w-5 h-5'} src={Xmark} onClick={() => { setSelected(false); window.location.href = '/' }} /></div>

          <p className={'text-2xl font-bold flex-wrap[600] mb-8'}>{selectedMarker.placeName}</p>

          <div className={'w-full flex flex-wrap items-center justify-center'}>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>경사로</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img src={Step} />
              </button>
            </div>

            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>엘리베이터</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img className={'w-6'} src={Elevator} />
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>전용 주차장</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Park} /></button>
            </div>
          </div>
          <div className={'w-full flex flex-wrap items-center justify-center mb-12'}>
            <div className='flex flex-col items-center'>
              <p className={'text-blue-500 text-[12px] mb-1'}>전용 화장실</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Toilet} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 블록</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Block} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 안내도</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Notice} /></button>
            </div>
          </div>

          <p className={'w-[250px] text-[#9D61FE] font-bold mb-2'}>Review</p>
          <div className={'flex items-center justify-center mb-[100px]'}>
            <input type="text" className={'w-68 h-12 mr-2 rounded-full drop-shadow-xl p-4 outline-none'} placeholder='정확한 정보를 작성해주세요.' />
            <button className={'w-10 h-10 rounded-full drop-shadow-xl bg-[#9D61FE] flex items-center justify-center cursor-pointer'} onClick={() => console.log('click')}>
              <img className={'w-4 h-4'} src={Send} />
            </button>
          </div>
        </div>
      }

      {created ?
        <div className={`animated overflow-y-scroll rounded-t-[20px] fixed z-50 flex flex-col justify-start items-center shadow-2xl bg-white/70 backdrop-blur-xl md:w-[400px] lg:w-[400px] w-screen lg:h-screen md:h-screen h-[50%] mt-[120%] lg:mt-0 md:mt-0 p-4`}>
          <div className={'w-full flex justify-end mb-8'}><img className={'w-5 h-5'} src={Xmark} onClick={() => { setCreated(false); window.location.href = '/map' }} /></div>

          <input className={'text-3xl font-bold w-[250px] mb-8 bg-transparent border-b-2 border-[#9D61FE] text-[#9D61FE] outline-none'} placeholder='애니플러스 합정점' />

          <div className={'w-full flex flex-wrap items-center justify-center'}>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>경사로</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img src={Step} />
              </button>
            </div>

            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>엘리베이터</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] p-4 flex flex-col justify-center items-center`}>
                <img className={'w-6'} src={Elevator} />
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>전용 주차장</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 mb-4 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Park} /></button>
            </div>
          </div>
          <div className={'w-full flex flex-wrap items-center justify-center mb-12'}>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>전용 화장실</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Toilet} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 블록</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Block} /></button>
            </div>
            <div className='flex flex-col items-center'>
              <p className={'text-[#9D61FE] text-[12px] mb-1'}>점자 안내도</p>
              <button className={`drop-shadow-xl w-16 h-16 mr-3 ml-3 rounded-xl bg-[#ECE0FF] flex flex-col justify-center items-center`}><img className={'w-6'} src={Notice} /></button>
            </div>
          </div>

          <button className={'w-[250px] pt-3 pb-3 bg-[#9D61FE] text-white rounded-xl font-bold text-xl'} onClick={() => createMarker('', 1, 1)}>생성하기</button>

          <div className={'w-12 mb-24'}></div>
        </div>
        : <div className={`unanimated rounded-t-[20px] overflow-y-auto fixed z-50 flex justify-center items-start shadow-2xl bg-white md:w-[400px] lg:w-[400px] w-screen lg:h-screen md:h-screen h-[50%] mt-[120%] lg:mt-0 md:mt-0`}>
          <p>Create new one!</p>
        </div>}

      <div className={'fixed z-50 w-screen h-24 flex justify-center items-center'}>
        <div className={'w-[347px] h-[47px] flex items-center rounded-[20px] bg-gray-200/50 backdrop-blur-xl'}>
          <img src={Glass} alt="" className={'w-[24px] h-[24px] ml-4'} />
        </div>
      </div>

      <div id="map" className='w-screen h-screen'></div>
    </Fragment>
  )
}