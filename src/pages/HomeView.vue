<script setup lang="ts">
import Main from '@/layouts/Main.vue'
import logo from '@/assets/img/logo.png'
import backrpg from '@/assets/img/backrpg.png'
import rpg from '@/assets/img/2022-03-31-22-11-40.png'
import faction from '@/assets/img/faction.png'
import skyblock from '@/assets/img/2022-03-31-22-11-40.png'
import lightning from '@/assets/icon/lightning-bolt.svg'
import user from '@/assets/icon/user-group.svg'
import shield from '@/assets/icon/shield-check.svg'

const background = 'background-image: url('+backrpg+');'
</script>

<template>
  <Main>
  <div class="hero min-h-full bg-local" :style="background">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Server Minecraft</h1>
        <img class="mb-5 text-5xl font-bold" :src="logo">
        <p class="mb-5 text-3xl font-bold">Chiến trường bất bại</p>
        <p class="mb-5 text-3xl font-bold">Thắng bại tại kỹ năng</p>
        <button class="btn btn-primary">Tham gia ngay</button>
      </div>
    </div>
  </div>
  <div class="hero min-h-full bg-base-200 outline outline-2  outline-offset-2" style="background-color: #08232621;">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img :src="rpg" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">MMO-RPG</h1>
        <p class="py-6">Một lối chơi nhập vai vào một thế giới mở nhiều nhiệm vụ phong phú theo cốt truyện. Bạn có thể tham gia vào các ngành nghề và sử dụng vũ khí cùng các chiêu thức riêng của ngành nghề đó hỗ trợ việc phiêu lưu của ban....  </p>
        <button class="btn btn-primary"><RouterLink to="/rpg">Xem thêm</RouterLink></button>
      </div>
    </div>
  </div>
  <div class="hero min-h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img :src="faction" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">FACTION SURVIVAL</h1>
        <p class="py-6">Một lối chơi sinh tồn được cập nhật thêm chế độ chiếm đất và tạo ra 1 phe phái của riêng mình và bạn bè của bạn. Faction là 1 chế độ chiến tranh không sợ nguy hiểm bị giết bởi quái vật nhưng cũng phải cẩn thận các phe phái của những người chơi khác khi bạn sinh sống trong khu vực của mình...</p>
        <button class="btn btn-primary"><RouterLink to="/fac">Xem thêm</RouterLink></button>
      </div>
    </div>
  </div>
  <div class="hero bg-base-200 outline outline-2  outline-offset-2" style="background-color: #08232621;">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img :src="skyblock" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold ">SKYBLOCK</h1>
        <p class="py-6">Một lối chơi sinh tồn mới lạ khác khi bạn phải sống trên 1 hòn đảo nhỏ bé tí lơ lửng trên trời và bạn chỉ có 1 vài dụng cụ được cho trong rương giúp bạn sinh tồn và mở rộng hòn đảo của bạn....  </p>
        <button class="btn btn-primary"><RouterLink to="/sky">Xem thêm</RouterLink></button>
      </div>
    </div>
  </div>
  <div class="min-h-full bg-base-500" >
    <div class="col-start-2 col-span-4  text-center text-5xl m-10 "><strong>Một số tính năng của chúng tôi</strong></div>
  <div class="grid grid-cols-3 option">
    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img :src="lightning" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Chúng tôi nhanh, giống như tia chớp</h2>
        <p>Máy chủ của chúng tôi quá nhanh, ngay cả Sonic cũng không thể theo kịp, thật tuyệt vời, đúng không ?!</p>
      </div>
    </div>

    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img :src="user" oalt="Shes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Cộng đồng người chơi tuyệt vời</h2>
        <p>Chúng tôi có một cộng đồng tuyệt vời, nó luôn thú vị trên máy chủ của chúng tôi!</p>
      </div>
    </div>

    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img :src="shield" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Luôn luôn hoạt động</h2>
        <p>Máy chủ của chúng tôi có 99,9% Thời gian hoạt động, vì vậy bạn sẽ chơi bất cứ khi nào bạn muốn!</p>
      </div>
    </div>

    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="/icon/calendar.svg" style="width: 100px" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Sự kiện tuyệt vời</h2>
        <p>Chúng tôi có một số sự kiện siêu thú vị trong máy chủ dành cho bạn, điều đó thật tuyệt vời, nghiêm túc, là tốt nhất!</p>
      </div>
    </div>

    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="/icon/code.svg" style="width: 100px" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Plugin tùy chỉnh</h2>
        <p>Chúng tôi đã tạo một số plugin tùy chỉnh cho máy chủ của mình, chúng thật tuyệt vời, bạn sẽ thích chúng!</p>
      </div>
    </div>

    <div class="card w-100 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="/icon/trending-up.svg" style="width: 100px" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Luôn luôn đổi mới</h2>
        <p>Chúng tôi luôn luôn đổi mới hơn mỗi ngày để cho các bạn không bị nhàm chán khi chơi trong máy chủ</p>
      </div>
    </div>

  </div>
</div>

<div class="min-h-full bg-base-500" >
  <div class="col-start-2 col-span-4  text-center text-5xl m-10 "><strong>Hãy bình chọn cho chúng tôi</strong></div>
<div class="flex justify-evenly">
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="https://www.planetminecraft.com/images/layout/planetminecraft_logo.png" style="width: 300px" oalt="Shes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">PlanetMinecraft</h2>
      <a role="button" class="btn btn-link">Bình chọn</a>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="https://yt3.ggpht.com/-St0amFDpbC0/AAAAAAAAAAI/AAAAAAAAAAA/eZlt0WfF-F8/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg" style="width: 100px" oalt="Shes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">ServerPact</h2>
      <a role="button" class="btn btn-link">Bình chọn</a>
    </div>
  </div>
</div>
</div>

<div class="min-h-full bg-base-500" >
  <div class="col-start-2 col-span-4  text-center text-5xl m-10 "><strong>Các thành viên chủ chốt của máy chủ</strong></div>
<div class="grid grid-cols-3">
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/owner.jpg" style="width: 200px" oalt="Shes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">OWNER</h2>
      <p>WildAsian</p>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/ql.jpg" style="width: 200px" oalt="Shes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">DEV</h2>
      <p>Nguyễn Quốc Lâm</p>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/alex.jpg" style="width: 200px" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">DEV</h2>
      <p>Alexzvn</p>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/kay.jpg" style="width: 200px" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">DEV</h2>
      <p>TESTER</p>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/satthu.jpeg" style="width: 200px" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">MOD</h2>
      <p>Satthu</p>
    </div>
  </div>
  <div class="card w-100 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="./components/img/zodasic.jpg" style="width: 190px" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">MOD</h2>
      <p>Zodasic</p>
    </div>
  </div>
</div>
</div>
  </Main>
</template>

<style scoped lang="css">
.option img {
   width: 100px;
}
</style>
