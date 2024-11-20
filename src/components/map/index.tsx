import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function CustomMap() {
  return (
    <YMaps>
      <Map className='h-full w-full' options={{
        copyrightProvidersVisible: false
      }} defaultState={{ center: [37.914740, 58.382912], zoom: 18, behaviors: ["drag"] }} modules={['geocode']}>
        <Placemark options={{ iconColor: "#FF9D37"}} geometry={[37.91490, 58.382912]} />
      </Map>
    </YMaps>
  )
}
