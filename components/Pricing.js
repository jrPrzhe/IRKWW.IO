import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Выберите свой тарифный план
              
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Давайте выберем пакет, который лучше всего подходит для вас, и воспользуемся им с удовольствием.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Скучный Тариф
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Полный доступ без рекламы! WW
                  </li>
                  <li className="relative check custom-list my-2">
                    Подключите любое количество устройств
                  </li>
                  <li className="relative check custom-list my-2">
                    Максимум скорости для вашей сети, без влияния на доступ к российским сервисам
                  </li>
                  <li className="relative check custom-list my-2">
                    Работает на любом устройстве: ТВ, планшеты, ноутбуки
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    РУБ. 440 <span className="text-black-500"><br/>1 мес</span>
                      <br />
                    <span className="line-through text-black-500">690</span>
                  </p>
                  

              <ButtonPrimary>
  <a
    href="https://t.me/irk_proxy?text=Привет! Присматриваюсь к тарифу на месяц)"
    target="_blank"
    rel="noopener noreferrer"
  >
    Выбрать
  </a>
</ButtonPrimary>


                      
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Стандартный Тариф{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Забудьте о рекламе навсегда! WW
                  </li>
                  <li className="relative check custom-list my-2">
                    Подключайте всё, что хотите — без ограничений.
                  </li>
                  <li className="relative check custom-list my-2">
                    Высокая скорость, стабильная сеть. Российские сервисы остаются доступными.
                  </li>
                  <li className="relative check custom-list my-2">
                    Совместимость с ТВ, планшетами, ноутбуками и другими гаджетами.
                  </li>
                </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4">
  РУБ. 999 <span className="text-black-500"><br/>3 мес</span>
  <br />
  <span className="line-through text-black-500">1 790</span>
</p>
                  <ButtonPrimary>
  <a
    href="https://t.me/irk_proxy?text=Привет! Присматриваюсь к тарифу на 3 месяца)"
    target="_blank"
    rel="noopener noreferrer"
  >
    Выбрать
  </a>
</ButtonPrimary>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Сочный Тариф WW{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                   Реклама вам не помешает! WW
                  </li>
                  <li className="relative check custom-list my-2">
                    Поддержка большого числа устройств одновременно.
                  </li>
                  <li className="relative check custom-list my-2">
                    Максимум скорости для вашей сети, без влияния на доступ к российским сервисам.
                  </li>
                  <li className="relative check custom-list my-2">
                    Идеально подходит для ТВ, планшетов и ноутбуков.
                  </li>
                </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4">
  РУБ. 3 999 <span className="text-black-500"><br/>12 мес</span>
  <br />
  <span className="line-through text-black-500">7 490</span>
</p>

                  <ButtonPrimary>
  <a
    href="https://t.me/irk_proxy?text=Привет! Присматриваюсь к тарифу на год)"
    target="_blank"
    rel="noopener noreferrer"
  >
    Выбрать
  </a>
</ButtonPrimary>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Стабильная сеть от WW{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
            Пользуйтесь везде, чтобы вам было проще при перемещении локаций.


            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Дети скажут нам спасибо за ролики на ютубе! :){" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              
            </motion.p>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Напиши нам сейчас!  <br /> Получи специальное предложение!
                  </h5>
                  <p>Let's go WWWWWW 01h4deegeszmutm7</p>
                  </div>
                  <ButtonPrimary>
  <a
    href="https://t.me/irk_proxy?text=Привет!

Я хотел бы оставить заявку на услугу. Пожалуйста, дайте знать, как я могу это сделать и какие детали вам нужны. 

Спасибо!"
    target="_blank"
    rel="noopener noreferrer"
  >
    Оставить заявку!
  </a>
</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
