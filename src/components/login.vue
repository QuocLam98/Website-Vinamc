<script setup lang="ts" >
import './index.css'
</script>


<template >
<login>
<div class="bg-local min-h-screen hero " style="background-image: url(./components/img/backrpg.png);">
  <div >
  <div class="hero-content min-h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <div class="card w-96">
          <div class="card-body" >
                        <h1 class="card-title">Chương trình nạp thẻ</h1>
            <h3 class="card-title">Khuyến mãi nạp Bank và MOMO +20%</h3>
          </div>
          <figure><img src="./components/img/nql.png" /></figure>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body" >
 <h1 class="text-5xl font-bold">Đăng nhập VINAMC</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mật khẩu</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" />
            <label class="label">
                <a href="/item.html" class="label-text-alt link link-hover">Bạn chưa có tài khoản?</a>
              <a href="#" class="label-text-alt link link-hover">Bạn quên mật khẩu?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</login>
</template>