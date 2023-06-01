import React, { useState } from "react";
import Modal from "./Model";

const App = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  if(modal){
    document.body.classList.add("overflow-y-hidden")
  }else{
    document.body.classList.remove("overflow-y-hidden")
  }

  return (
    <div className="p-5">
      <h1 className="text-8xl font-semibold py-5">Hello Testing</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        totam voluptatum aliquid magni recusandae excepturi, quasi nobis porro
        ex laborum optio aut repellendus fuga quam earum? Quia incidunt rem
        suscipit nostrum culpa molestias ducimus, laudantium id minus officiis
        nisi eos fuga animi iste similique porro ipsa. Iure libero maiores
        earum, non fugit quae, ab recusandae voluptate minima laboriosam dolore
        perferendis quod nesciunt quisquam quasi tenetur error modi porro,
        commodi harum voluptatibus explicabo? Iusto minima ipsum explicabo minus
        illum earum unde quisquam repudiandae maiores adipisci, rem accusantium
        provident aliquid inventore similique, incidunt quidem aliquam quibusdam
        rerum! Ipsa, doloribus pariatur? Nobis provident necessitatibus iste quo
        tenetur, facere ullam iure unde fugiat cumque ipsum repudiandae. Iure,
        voluptatem libero expedita corrupti quisquam quae repudiandae reiciendis
        itaque hic repellendus consequatur natus, neque corporis odit eveniet.
        Aliquam sequi doloremque perspiciatis eius aliquid, magni tempora
        incidunt repellendus quod voluptatem sed vel ea animi, voluptate
        distinctio. Mollitia fuga ea explicabo ipsam aspernatur quia, eum
        eligendi unde illo, dignissimos voluptatibus sint quo incidunt pariatur?
        Nam, cupiditate ea qui ad iste placeat id doloremque fugit nisi,
        corporis voluptas corrupti reprehenderit atque accusamus quasi non
        libero labore minus debitis quidem. Suscipit eaque repudiandae iure,
        accusantium ipsa officiis velit culpa natus vel! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptas velit saepe molestiae, a
        architecto nam tempora ex nulla numquam, minus alias voluptatem
        blanditiis obcaecati tenetur veniam recusandae repudiandae cum mollitia
        iure officiis id maxime ad, est dolore. Corrupti, deleniti. Iste aut,
        repellendus saepe numquam in, error ipsa commodi veritatis voluptatibus
        officia veniam recusandae dolor. Voluptatibus amet aspernatur tempora,
        blanditiis dolorem ea minus iusto soluta. Eaque, rerum ex, aperiam
        nostrum esse exercitationem nesciunt optio aut reiciendis delectus
        laborum. A, at in, enim molestiae amet voluptatibus assumenda, magnam
        nisi obcaecati nostrum iusto quas ducimus pariatur facilis quia
        praesentium. Rerum aliquid nesciunt dolores iusto inventore in quis
        illum reiciendis, laboriosam necessitatibus accusantium ex quae
        molestias voluptatibus nihil fuga tempore magnam provident eveniet animi
        dolor! Adipisci vitae ea debitis quas. Perferendis facilis praesentium
        doloribus voluptates ipsum esse quas aliquam voluptatibus, ea magni
        recusandae repellat vero. Mollitia qui placeat, numquam ut, hic modi
        nesciunt fuga error a, earum cupiditate reiciendis unde amet harum
        voluptatum? At natus repellat molestiae iure? Facere itaque, cumque
        doloremque rerum illum mollitia dignissimos deserunt. Corporis vel
        exercitationem quis, deserunt laboriosam ullam repellendus aliquam
        laborum. Consequatur quis ratione natus, illum debitis nostrum
        distinctio nisi molestias a nesciunt repudiandae, iste vel laboriosam
        laborum doloribus deserunt nam pariatur. Quam unde dolore exercitationem
        nesciunt et, nihil rem, velit, quibusdam facilis aut nulla eligendi.
        Ipsam, eveniet officiis consectetur fuga doloribus ipsa molestiae
        nostrum provident consequatur natus beatae voluptatum! Quae ipsum nobis
        possimus quidem hic omnis quisquam fugit repellendus, repellat modi eius
        numquam! Voluptate consequatur doloremque saepe ipsa exercitationem
        assumenda odit aut debitis ab ullam nulla deleniti id quisquam mollitia,
        nesciunt molestias maxime veniam necessitatibus quaerat officia velit
        delectus officiis nihil. Numquam maxime aliquam qui ab quia possimus
        blanditiis, dolorum quisquam minus deleniti fuga cupiditate, voluptate
        excepturi quaerat sed minima enim quis deserunt obcaecati fugiat
        voluptates dolore dolor animi. Alias modi earum tempora! Facilis tempora
        quos maxime deserunt cupiditate voluptate expedita, ea sunt sapiente
        alias ratione maiores aperiam modi consequuntur quis dolore obcaecati
        aut voluptatem dolorem sint architecto facere qui? Ullam quia itaque
        molestiae accusantium iusto reiciendis exercitationem, earum, similique
        repudiandae ab ea pariatur voluptas culpa laborum iste voluptates.
        Voluptatibus exercitationem, iure similique neque eveniet rem, non totam
        rerum quibusdam praesentium animi. Rem eum soluta rerum dolores
        veritatis quam assumenda eligendi harum vitae repellendus. Ut, nam
        accusamus molestias, eveniet fuga a labore atque ipsum maiores ex quos.
        Nisi sed, cum aliquam eveniet repudiandae vero expedita sunt deleniti,
        optio accusantium quae doloribus quam impedit ad tenetur illo dolor.
        Eveniet adipisci ex dolores quod magni exercitationem voluptatum placeat
        cumque modi laudantium quisquam alias accusantium quibusdam, sed est.
        Doloribus error quos labore accusantium nisi nulla maxime odio
        aspernatur porro repellendus consequatur nihil dolore ea voluptas culpa,
        impedit, dolor facilis deserunt! Impedit maxime aspernatur cum
        blanditiis odio laborum odit ullam, vitae illum totam facilis voluptatem
        magni autem eius tenetur neque eaque debitis nostrum dignissimos harum
        qui dolorum voluptatum, earum consequuntur? Fuga omnis quia voluptas
        ipsam dolorum beatae voluptates alias recusandae. Saepe culpa mollitia,
        voluptatem ea nobis vel laudantium odit in, modi officia perspiciatis
        repudiandae! Quidem, expedita animi dignissimos aspernatur autem
        corrupti sapiente nihil porro, aut eum temporibus quia vel fugiat id
        iure ipsum reprehenderit a nulla odio enim voluptates quaerat. Dolores
        omnis voluptatum incidunt doloribus voluptatem illum aliquam, mollitia,
        officiis ducimus doloremque a ipsum quia quibusdam cumque. Provident
        rerum voluptate consectetur culpa ipsa perferendis fuga eveniet
        recusandae libero placeat quia officiis sapiente, odit dolorem nisi est!
        Minus dignissimos sapiente corrupti nam ex voluptas accusamus aut sit
        fugit alias? Ex assumenda, fugiat dolore dicta nam sapiente illo, enim
        dignissimos consectetur blanditiis voluptatem nisi soluta saepe itaque
        cupiditate perferendis esse? Nostrum sequi at culpa vitae porro maiores
        tempore, illum soluta asperiores ullam quam. Beatae laborum minima
        soluta. Facilis explicabo itaque quidem cupiditate, quos ducimus, id quo
        commodi eum dolore vero modi illo consectetur molestias unde cumque
        eveniet qui ex nisi! Quae accusantium eaque, quia alias quaerat incidunt
        ab, accusamus iste reprehenderit natus, aliquam est fugit eveniet
        blanditiis dicta. Vel, aut. Alias at, enim saepe debitis, suscipit eos
        deserunt eveniet incidunt itaque sit veniam eligendi et asperiores
        minima atque sunt hic voluptatum cum vero aut consequuntur voluptates.
        Rem nemo cum aut voluptate delectus tempora consequatur nulla sint
        similique doloremque molestias, nesciunt numquam beatae unde veritatis
        magni modi architecto officia incidunt nam possimus corporis! Minima eos
        alias necessitatibus vel. Explicabo asperiores aliquid illo, porro minus
        dolor officiis aut beatae repellat ullam veniam ipsum enim sunt
        blanditiis, id, sit aliquam eius tempora voluptatibus quidem quia unde
        atque sequi! Dolorum aperiam optio dignissimos earum accusamus numquam
        aspernatur dolore, maiores accusantium et, repudiandae porro amet
        facilis cum nemo provident quae. Modi, nisi. Quod earum, officiis, illum
        error in maiores inventore distinctio assumenda nulla sapiente unde
        eius, nemo iure. Voluptate ipsam, vitae ducimus voluptatem quae
        similique aliquid magnam numquam, debitis minus, eaque ipsa ad dicta
        repellendus! Dolores sint laboriosam neque necessitatibus perferendis
        odio, quae possimus nesciunt ab tenetur nemo corporis libero temporibus
        placeat quaerat nihil. Hic maiores tenetur voluptatem porro. Error nobis
        consequatur aliquam repudiandae veritatis exercitationem dolor ea
        voluptatem similique, est earum animi quidem, qui laboriosam commodi.
        Natus, fugit fuga laborum architecto praesentium quasi earum suscipit
        cupiditate aperiam quisquam magni amet corrupti nemo nihil temporibus
        ipsum accusantium? Quibusdam quae dolorum magnam quam impedit, tempore
        sint, maxime aperiam ullam doloribus tenetur in soluta minima quos neque
        illo autem laborum quaerat? Neque non, ratione eaque nam dolorum illo
        quas eligendi eum alias dolorem at iusto dicta, perferendis sapiente
        ipsa odio. Perferendis ducimus enim in debitis quis alias facere
        consectetur quisquam dignissimos, unde doloribus est nihil, praesentium
        omnis. Natus asperiores possimus sunt sed quasi expedita cumque in
        perferendis doloribus modi, ea numquam, similique incidunt odit est
        recusandae qui animi esse iste deleniti reprehenderit vero sint!
        Doloremque consequatur accusantium necessitatibus vero illo
        reprehenderit earum neque quaerat, quis cupiditate obcaecati. Dolor
        earum quisquam soluta corporis praesentium totam corrupti modi sunt
        veritatis optio repudiandae perspiciatis rem, ducimus natus quod hic
        quae veniam esse quam illo unde laboriosam? Eos, cumque pariatur
        provident recusandae doloremque ut. Minima laudantium nihil deserunt
        harum accusantium recusandae repellat, maiores delectus!
      </p>
      <button
        onClick={toggle}
        className="w-28 h-8text-center px-3 py-1 rounded bg-blue-400 mt-5"
      >
        Modal
      </button>

      {modal && <Modal  toggle={toggle} />}
    </div>
  );
};

export default App;
