<script setup lang="ts">
import Main from '@/layouts/Main.vue'
import bg from '@/assets/img/backrpg.png'
</script>

<template>
  <Main>
  <div  class="bg-local min-h-screen hero " :style="'background-image: url('+bg+');'">
  <div>
    <div class="hero-content min-h-full bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <div class="card w-96">
              <div class="card-body">
                <p class="text-3xl font-bold">Nạp thẻ</p>
                <p>Chú ý : tên nhân vật phải trùng với tên trong game kể cả ký tự viết HOA</p>
                <p >Người chơi phải vào game trước khi nạp coin</p>
                <p  >Ghi sai Nickname sẽ bị nạp vào Nick khác bạn sẽ không nhận được Coin</p>
                <p >Chọn sai mệnh giá mất thẻ, các bạn nhớ chọn đúng nhé.</p>
                <br />
              <!-- <figure><img src="/img/nql.png" /></figure> -->
              <p class="text-3xl font-bold">VUI LÒNG ĐỌC KỸ</p>
                <p class="py-6">1. Để biết thêm chi tiết về thanh toán, liên hệ tại <a class="link link-primary" href="https://www.facebook.com/gaming/Vinamcno1">Page Facebook</a></p>
                <p>2. Khi nạp nhớ đọc kỹ thông báo. Nhớ giữ lại thẻ cào, phòng trường hợp cần đối chiếu.</p>
                <p>3. Nhớ chọn đúng mệnh giá thẻ của bạn. Chọn sai thẻ nạp sẽ bị lỗi và không được cộng tiền, mất tiền mất thẻ Admin không chịu trách nhiệm.</p>
                <p>4. Ghi đúng tên người quyên góp, viết liền không dấu và không dấu cách, Danh sách sẽ cập nhật đúng tên bạn.</p>
            </div>
            </div>
          </div>
          <div class="card-body bg-white m-10">
              <h1 class=" text-3xl  font-bold">Nạp xu tự động</h1>
              <p>Ghi Nickname phải trùng với tên trong game kể cả ký tự viết HOA.</p>
              <div class="form-control">
                <input type="text" placeholder="Tên nhân vật" class="input input-bordered" />
              </div>
              <div class="form-control">
                  <select class=" select select-bordered " id="selectType" name="type" >
                      <option value="" >Chọn loại thẻ</option>
                      <option value="1">Viettel</option>
                        <option value="2">Mobifone</option>
                        <option value="3">Vinaphone</option>
                      <option value="6">Zing</option>
                  </select>
              </div>
              <div class="form-control">
                  <select class="select select-bordered" id="selectAmount" name="amount" >
                      <option value="" >Chọn mệnh giá</option>	
                        <option value="10000">10.000</option>
                        <option value="20000">20.000</option>
                      <option value="30000">30.000</option>
                      <option value="50000">50.000</option>
                      <option value="100000">100.000</option>
                      <option value="200000">200.000</option>
                      <option value="300000">300.000</option>
                      <option value="500000">500.000</option>
                      <option value="1000000">1.000.000</option>
                  </select>
              </div>
              <div class="form-control">
                  <input type="text" placeholder="Số seri" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" placeholder="Mã thẻ" class="input input-bordered" />
                </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Nạp xu</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  </Main>
</template>