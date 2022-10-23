import image from "../../../assets/images/roland01.jpg"
import Blurhash from "../../../components/blurhash/blurhash"
import QuoteSvg from "../../../components/quote/quote"
import Vimeo from "../../../components/video/vimeo/vimeo"
import Youtube from "../../../components/video/youtube/youtube"
import { YOUTUBE_ID } from "../../../constants/constants"

function Story() {
  return (
    <section className="flex flex-col items-center gap-20">
      <QuoteSvg>
        <p>
          Je suis né très petit, recroquevillé sur un monde bizarre. On m’a fait crier tout de suite
          et le monde fut immédiatement trop grand.
        </p>
        <p>
          J’ai aimé l’herbe et la lumière passante qui éclaire miraculeusement les petits insectes
          plein de pattes, d’ailes, d’yeux noirs et rouges dans les petits couloirs multiples qui
          donnaient vers d’autres mondes.
        </p>
        <p>
          Bientôt, il a fallu se mettre debout et parler, comme si cela allait de soi. Je retombais
          sur mon derrière et bégayais à l’infini. Mes cheveux blanc-blond furent coupés et l’école
          me mis debout. Il fallait se battre comme un garçon, je le fis avec trop de force pour
          être intelligible, cela me parut encore bizarre. Je fus gentil et muet.
        </p>
        <p>
          Un jour, je pénètre dans l’appartement puis le château du collectionneur Henri-Pierre
          Roché, et là, merveille, je fais des rencontres extraordinaires : des tableaux, des
          sculptures, des objets multiples me font face, s’animent et me parlent. Ces jours là je
          parle avec eux, complice et joyeux, je suis dans mon monde. [...]
        </p>
      </QuoteSvg>

      <div className="aspect-square overflow-hidden rounded-full border-4 border-gray-100 shadow-2xl [&>div]:h-full [&_img]:h-full [&_canvas]:h-full">
        <Blurhash
          hash="LOIhjQ_Nx[%NMbRP%LIVOtkW%Mtm"
          url={image}
          title="Roland souriant devant des tableaux"
          width={604}
          height={403}
        />
      </div>

      <QuoteSvg>
        <p>
          [...] Plus tard, j’apprendrais que toutes ces œuvres étaient signées. Les signatures
          étaient entre autre, celles de Georges Braque, Constantin Brancusi, Marcel Duchamp, Pablo
          Picasso, Henry Moore, Etienne Martin, Marie Laurencin, Jean Tinguely, José Garcia Tella,
          Sanyu, etc.
        </p>
        <p>Je compris le sacré et la douleur et ma voie dans l’existence.</p>
        <p>
          Quelques années après, toujours muet et la mémoire pleine, je savais que la communication
          tant désirée se trouvait en moi. Tous ces personnages pouvaient me comprendre, avec eux
          aussi je pouvais discuter et échanger. L’acte de peindre me fut assez vite naturel. Mon
          destin pris en main fit le reste.
        </p>
        <p>
          La recherche du dialogue au travers de tableaux presque autobiographiques, mon Graal
          quotidien.
        </p>
        <cite className="mt-10 block">
          <p className="text-end">Roland Potin-Eizner</p>
        </cite>
      </QuoteSvg>

      <Youtube embedId={YOUTUBE_ID.STORY} />
      <Vimeo
        title="Reportage France 3"
        url="https://player.vimeo.com/video/761922175?h=863a6815c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      />
    </section>
  )
}

export default Story
