import { SafeAreaView, StatusBar, FlatList, Text } from "react-native";
import { Services } from "./src/screens/Services";
import { Item } from "./src/components/Item";

import Teclado from "./assets/items/teclado.png";
import Headset from "./assets/items/headset.png";
import Monitor from "./assets/items/monitor.png";
import Mouse from "./assets/items/mouse.png";
import Macbook from "./assets/items/macbook.png";
import Camera from "./assets/items/camera.png";
import Roteador from "./assets/items/roteador.png";
import Impressora from "./assets/items/impressora.png";
import Placa from "./assets/items/placa.png";
import Ssd from "./assets/items/ssd.png";

const services = [
  {
    id: 1,
    name: "Teclado Mecânico Keychron K2",
    img: Teclado,
    price: "890,00",
    description:
      "Teclado com switches mecânicos para maior precisão e resposta tátil.",
  },
  {
    id: 2,
    name: "Headset Gamer Sem Fio Logitech G435",
    img: Headset,
    price: "350,00",
    description:
      "Fones de ouvido com cancelamento de ruído para uma experiência sonora imersiva.",
  },
  {
    id: 3,
    name: "Monitor LG UltraWide 34",
    img: Monitor,
    price: "1.959,00",
    description:
      "Monitor com formato ultrawide para uma visão expandida e maior produtividade.",
  },
  {
    id: 4,
    name: "Mouse Gamer Sem Fio Logitech G PRO",
    img: Mouse,
    price: "426,00",
    description:
      "Mouse com sensor de alta precisão e botões programáveis para jogos.",
  },
  {
    id: 5,
    name: "Macbook Pro 14 2023 M2",
    img: Macbook,
    price: "13.985,00",
    description:
      "Notebook potente e portátil, ideal para trabalho e entretenimento.",
  },
  {
    id: 6,
    name: "Sony Alpha 7S III",
    img: Camera,
    price: "25.687",
    description:
      "Câmera com alta resolução para capturar momentos especiais com qualidade.",
  },
  {
    id: 7,
    name: "Roteador TP-Link Archer AX73",
    img: Roteador,
    price: "899,00",
    description:
      "Roteador de alta velocidade para uma conexão estável e rápida à internet.",
  },
  {
    id: 8,
    name: "Multifuncional HP Color LaserJet Pro",
    img: Impressora,
    price: "3.959,99",
    description:
      "Impressora que também funciona como scanner e copiadora, oferecendo versatilidade.",
  },
  {
    id: 9,
    name: "Placa de Vídeo GeForce RTX® 4090",
    img: Placa,
    price: "20.430,01",
    description:
      "Placa de vídeo dedicada para melhor desempenho em jogos e aplicações gráficas.",
  },
  {
    id: 10,
    name: "SSD, Kingston, SA400S37/960G",
    img: Ssd,
    price: "316,50",
    description:
      "Disco de armazenamento de estado sólido para velocidade e performance superiores.",
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Services />
      <FlatList
        data={services}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item: { name, img, price, description } }) => {
          return (
            <Item
              name={name}
              img={img}
              price={price}
              description={description}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}
