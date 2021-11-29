import * as S from "./styles";

interface PropsType {
  startY: number;
      
  </S.Container>;
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

  interface Delusional {
    url: Promise<any>;
    left: number;
    top: number;
  }

  const [imageList, setImageList] = useState<Delusional[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastYRef = useRef<number>(startY);
  const isLeftRef = useRef<boolean>(false);

  const { current: lastY } = lastYRef;
  const { current: isLeft } = isLeftRef;
  const offset = window.screen.height * 0.8;

  const onScrollHandler = () => {
    const screenBottom = window.scrollY + window.screen.height;

    if (screenBottom >= lastY + offset) {
      const id = getRandomInt(1, 21).toString();
      const left = isLeft ? 0 : 100;
      const img = import(`../../assets/delusional/delusional${id}.png`);

      lastYRef.current = screenBottom;
      isLeftRef.current = !isLeft;

      setImageList(imageList.concat({ left: left, url: img, top: screenBottom }));
    }

    if (containerRef.current) {
      containerRef.current.style.top = `${-window.scrollY}px`;
    }
  };
};

export default Background;
