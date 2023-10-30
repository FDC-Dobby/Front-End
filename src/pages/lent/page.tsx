import styles from './lent.module.css'
import LentCar from '../../assets/lentcar.png'
import Arrow from '../../assets/arrow.svg'
import { Fragment, useState } from 'react'

export default function Lent() {
  const [step, setStep] = useState<number>(0)

  return (
    <div className={styles.main}>
      {step ?
        <Fragment>
          <div className={styles.title}>대여하기</div>
          <div className={styles.warn}>* 필수 작성항목</div>
          <div className={styles.field}>
            <div className={'text-[#FF4D4D] text-[20px] mr-1'}>*</div>
            <div className={styles.subtitle}>이름</div>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.field}>
            <div className={'text-[#FF4D4D] text-[20px] mr-1'}>*</div>
            <div className={styles.subtitle}>전화번호</div>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.field}>
            <div className={'text-[#FF4D4D] text-[20px] mr-1'}>*</div>
            <div className={styles.subtitle}>보조기기</div>
            <select name="" className={styles.subdevice}>
              <option value="chair">휠체어</option>
              <option value="case1">1번종류</option>
              <option value="case2">2번종류</option>
              <option value="case3">3번종류</option>
            </select>
          </div>
          <div className={styles.field}>
            <div className={'text-[#FF4D4D] text-[20px] mr-1'}>*</div>
            <div className={styles.subtitle}>대여지역</div>
            <select name="" className={styles.subdevice}>
              <option value="chair">경북소프트웨어고등학교</option>
              <option value="case1">1번종류</option>
              <option value="case2">2번종류</option>
              <option value="case3">3번종류</option>
            </select>
          </div>
          <div className={styles.field}>
            <div className={'text-[#FF4D4D] text-[20px] mr-1'}>*</div>
            <div className={styles.subtitle}>대여지사</div>
            <select name="" className={styles.subdevice}>
              <option value="chair">의성군</option>
              <option value="case1">1번종류</option>
              <option value="case2">2번종류</option>
              <option value="case3">3번종류</option>
            </select>
          </div>
          <div className={styles.field}>
            <div className={styles.subtitle}>보호자 성명</div>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.field}>
            <div className={styles.subtitle}>보호자 연락처</div>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.status}>지사별 잔여보조기기 현황</div>
          <button className={styles.ok} onClick={() => window.location.href = '/'}>확인</button>
        </Fragment>

        : <Fragment>
          <div className={styles.title}>대여가능 보조기기 종류 보기</div>

          <div className={styles.contain}>
            <img src={Arrow} alt="" />
            <img src={LentCar} alt="" className={styles.img} />
            <img src={Arrow} alt="" className={styles.reverse} />
          </div>

          <div className={styles.info}>구분 : 휠체어</div>
          <div className={styles.info}>종류 : 기본형/아동용</div>
          <div className={styles.info}>기본 대여시간 : 기본 2개월</div>
          <div className={styles.info}>연장 : 1개월(1회만 연장가능)</div>
          <div className={styles.info}>최대 대여(사용) 기간 : 3개월 사용가능</div>

          <button className={styles.get} onClick={() => setStep(1)}>대여하기</button>
        </Fragment>}
    </div>
  )
}