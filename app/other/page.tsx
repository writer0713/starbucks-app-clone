import BottomAppBar from '@/components/footer';

export default async function OtherPage() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="w-full min-h-screen max-h-full bg-white *:text-black pt-20 pb-40">
      <h1>OTHER PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
        voluptas similique libero hic, atque corrupti quisquam minus, quidem
        officiis consectetur incidunt distinctio sapiente sequi exercitationem
        quo harum alias esse nostrum ex perspiciatis magnam facilis placeat.
        Earum commodi facilis porro iusto quam reiciendis. Provident aperiam
        dolore debitis numquam facere vero, temporibus soluta ab illo magnam
        libero. Fugiat provident exercitationem atque eveniet. Saepe impedit
        dolor minima excepturi sed, amet reprehenderit culpa voluptatum ratione
        quod cumque labore cum architecto sapiente voluptatem deserunt, incidunt
        unde consectetur natus suscipit! Est, optio? Inventore harum iste omnis?
        Aliquid laboriosam quae cumque reiciendis molestiae repudiandae veniam
        dolorum, sint saepe accusantium ipsa soluta repellendus doloribus sunt
        numquam praesentium placeat, quaerat fuga similique maxime. Quibusdam
        error officiis vel in unde accusamus deleniti vitae, velit ex
        perspiciatis dolore laborum deserunt, optio quos tempora, nemo sint non
        natus voluptatum consectetur itaque facilis. Voluptatem ex nemo
        accusantium iste vitae, nobis alias. Debitis, voluptatem animi cum
        inventore perferendis nulla at error magnam modi dolorum, optio, libero
        eum aut aperiam eveniet cumque facere atque tempora sunt! Laboriosam
        iure vel dignissimos recusandae, nostrum soluta voluptate a placeat
        deserunt perferendis omnis in quis quisquam dolorum, suscipit sunt!
        Eligendi iste explicabo quasi alias culpa. Molestias, consectetur sunt.
      </p>
      <BottomAppBar />
    </div>
  );
}
