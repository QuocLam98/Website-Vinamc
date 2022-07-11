<script setup lang="ts">
import Authen from '@/layouts/Authencation.vue'
import { ref } from 'vue';
import bg from '@/assets/img/backrpg.png'
import nql from '@/assets/img/nql.png'
import { useAccountStore } from '@/stores/Accounts';

const name = ref('')
const email = ref('')
const pass = ref('')
const store = useAccountStore()
const nameInput = ref<HTMLInputElement>(null as any)
const emailInput = ref<HTMLInputElement>(null as any)
const passInput = ref<HTMLInputElement>(null as any)
const error = ref({
    name: false,
    email: false,
    pass: false
    
})


const register = () => {
  if (name.value === '' || name.value.length > 16)
  {
    error.value.name = true
      nameInput.value.focus()
      return;
  }
  else {
    error.value.name = false
  }
  
  if (email.value === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
  {
    error.value.email = true
    emailInput.value.focus()
     return;
  }
  else {
    error.value.email = false
  }

  if (pass.value === '')
  {
    error.value.pass = true;
    passInput.value.focus()
     return;
  }
  else {
    error.value.pass = false
  }

store.setUser({name: name.value, role: '', points: 0})

}


</script>

<template >
<Authen>
  <div class="bg-local min-h-screen hero " :style="'background-image: url('+bg+')'" >
  <div class="hero-content min-h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <div class="card w-96">
          <div class="card-body">
            <h1 class="card-title">Chương trình nạp thẻ</h1>
            <h3 class="card-title">Khuyến mãi nạp Bank và MOMO +20%</h3>
          </div>
          <figure><img :src="nql" /></figure>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <h1 class="text-5xl font-bold">Đăng ký VINAMC</h1>
            <label class="label">
              <span class="label-text">Tên nhân vật</span>
            </label>
            <input type="text" v-model="name" ref="nameInput" placeholder="tên nhân vật" class="input input-bordered " :class="{'input-error': error.name}" />
            <span v-if="error.name" class=" text-red-500">Tên nhân vật sai định dạng</span>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" v-model="email" ref="emailInput" placeholder="email" class="input input-bordered" :class="{'input-error': error.email}" />
             <span v-if="error.email" class=" text-red-500">Email sai định dạng</span>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mật khẩu</span>
            </label>
            <input type="text"  v-model="pass" ref="passInput" placeholder="password" class="input input-bordered" :class="{'input-error': error.pass}" />
             <span v-if="error.pass" class=" text-red-500">Mật khẩu không được để trống</span>
            <label class="label">
              <a href="/login.html" class="label-text-alt link link-hover">Bạn đã có tài khoản?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click="register">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</Authen>
</template>