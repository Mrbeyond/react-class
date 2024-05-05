
export const post = {
  coverImage: "https://via.placeholder.com/100",
  title: "Thi sis just a dummy title for the dummy post",
  author: {
    name: "Dummy author name",
  },
  createdAt: "2024-5-4",
  content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa sunt labore nisi adipisci alias maxime quis nemo illum, facilis neque officiis culpa amet consequuntur reprehenderit dignissimos magni sequi voluptatibus laudantium.
  Doloribus quisquam at assumenda deserunt et fugit alias ipsa corrupti, officia cupiditate. Quae, totam excepturi, labore veritatis recusandae culpa ducimus architecto molestias dignissimos non nisi sapiente, debitis molestiae aliquid sint.
  Harum, illo! Quidem sapiente vitae eos, ullam consequuntur ratione unde delectus facilis corporis, rem, nihil possimus optio omnis pariatur! Minima eos modi facilis atque corporis architecto assumenda tempore impedit temporibus.
  Aspernatur esse commodi animi eaque maxime, inventore enim qui sint et veritatis obcaecati, nostrum quod vero assumenda autem beatae deserunt facere at temporibus eligendi impedit praesentium reiciendis. Quasi, dolor vero.
  Sunt aperiam sit voluptatum dolore harum odit est. Tempore quos dignissimos unde iure voluptatum, possimus aliquid voluptas, dolores, aut rem accusantium velit? Dicta recusandae doloribus accusamus pariatur magni harum voluptas?
  Inventore id sed iure ex libero est, laborum eveniet excepturi animi commodi iste sapiente deleniti rerum error fugiat debitis ab veniam laboriosam corporis a facere? Voluptas recusandae id inventore. Tenetur.
  Necessitatibus deleniti laborum sit non, consectetur sed quis reprehenderit autem fuga libero natus minima explicabo voluptas nostrum consequatur quia, culpa illum vel, expedita cumque quos tempora repudiandae nisi architecto. Eos.
  Praesentium vitae repudiandae dignissimos nihil aut id tempore ullam sint debitis corporis culpa placeat, quos ipsa alias quod suscipit voluptate nesciunt. Magnam nobis incidunt ipsa numquam impedit dicta aperiam inventore!
  Obcaecati at nemo minima soluta, cumque veniam ea doloremque? Tempore doloremque aliquid perspiciatis aspernatur amet esse consequatur voluptate ipsam in placeat non, numquam praesentium quae veritatis soluta ullam expedita incidunt.
  Modi, ullam provident. Quas corrupti consequatur maiores sed quia reprehenderit saepe, quidem soluta commodi id exercitationem eveniet optio quibusdam debitis laudantium vero voluptate! Mollitia libero consectetur corporis iure vitae consequatur.
  Voluptates quas, nisi voluptatem, illo reprehenderit nam perspiciatis temporibus natus magni rerum ab culpa ullam neque velit asperiores! Molestias ab eos explicabo enim officia asperiores, earum eveniet illo. Deserunt, rerum?
  Perferendis facilis perspiciatis vel, temporibus eum similique repellendus eaque, hic autem soluta saepe totam nesciunt in quas repudiandae libero rerum, omnis quasi. Omnis accusamus, fugit aspernatur commodi eligendi iste animi.
  Ipsam fugit inventore aut neque, modi sed eos quisquam impedit odio? Unde eius culpa eveniet dolores ullam nisi vero minus sint quos? Deserunt alias eius inventore modi, error dolorem ut.
  Distinctio, incidunt totam tempore tenetur alias quos perferendis at architecto nemo consequuntur doloribus veniam temporibus quam perspiciatis, non, officiis earum aliquam. Atque sit fugit consectetur dicta placeat reprehenderit provident? Voluptatem?
  Modi exercitationem eum enim. Sed maiores minus eligendi delectus cupiditate repellat reprehenderit id error exercitationem quibusdam deleniti amet sequi fugiat voluptatem dolores, inventore ratione qui dolorem mollitia ut possimus. Optio.
  Autem repellendus eius esse recusandae corporis sit, itaque iure libero provident porro eligendi, mollitia nam voluptatum a et. Natus commodi praesentium temporibus repudiandae nesciunt doloribus cumque laudantium sit quia aliquam?
  Modi, et sint? Quos, blanditiis corporis est cum quo inventore autem sit dolore eaque reprehenderit sunt fugit vitae cumque eos sed enim itaque nam veniam earum, dolores assumenda quasi repellendus.
  Error impedit nobis inventore, aliquam aut ad dignissimos, deserunt provident laborum aperiam, quibusdam debitis iure incidunt voluptatum in corporis. Provident odit facilis quaerat accusamus fugiat nam officia similique ullam assumenda.
  Distinctio perspiciatis eum maxime magni fuga, provident pariatur laudantium odit totam, saepe voluptatem quo. Quam soluta quaerat quo eligendi magni! Totam magni consequatur maxime ipsam quisquam ducimus laudantium, facere sed.
  Incidunt, voluptatibus? Ea quidem repellat ullam modi impedit quia esse illo nesciunt doloremque minima, assumenda vel dolorum, temporibus iste id, doloribus perspiciatis eligendi quibusdam reprehenderit reiciendis. Architecto dicta porro fugiat!
  `,

  likes: 200,
  comments: 50

}

export const populatePost =function(len=10){
  return new Array(len).fill(post).map((post, index)=>({...post, id:index+1}))
}

export const extPosts = populatePost(20)
export const extTrendingPosts = populatePost(6)
export const extLatestPosts = populatePost(12)

