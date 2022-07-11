<script setup lang="ts">
import Main from '@/layouts/Main.vue'
import backrpg from '@/assets/img/backrpg.png'
import Wooden from '@/assets/img/wooden_side_bg.png'
import Image from '@/assets/img/2022-03-31-22-11-40.png'

const background = 'background-image: url('+backrpg+');'
</script>

<template>
  <Main>
    <div class="hero min-h-screen bg-local" :style="background">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content flex-col lg:flex-row-reverse bg-base-200" >
            <div class="flex flex-col">
            <img :src="Image" class="  rounded-lg shadow-2xl image"  />
            </div>

            <div class="flex flex-col">
              <div class="m-10 text-neutral-900 text-xl font-medium"> <h1>Cốt truyện chính của máy chủ nhập vai MMO-RPG</h1></div>

            <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'"  tabindex="0" >
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    Đa thời không:
                </div>
                <div class="collapse-content text-black " > 
                  <p>Cũng như khi một vũ trụ hình thành bởi 1 vụ nổ, một đa vũ trụ cũng được hình thành qua một
                    vụ nổ. Sau vụ nổ khởi nguyên, đa vũ trụ luôn không ngừng mở rộng và sản sinh thêm vô hạn các vũ trụ bên trong
                    nó, các vũ trụ này sẽ ngày càng xa nhau do sự mở rộng của đa vũ trụ. Nhờ vậy, các vũ trụ trong đa vũ trụ
                    luôn ổn định và không bao giờ liên quan đến nhau. Nhưng điều đó chỉ xảy ra ở giai đoạn đầu của "Chu kì thời
                    không", ở giai đoạn cuối mọi thứ ở đa vũ trụ sẽ trở nên bất ổn.</p>
                    
                   <p> Chu kì thời không: Đa thời không (hay còn gọi là đa vũ trụ) luôn sinh ra và kết thúc theo một chu kì, ở giai
                    đoạn đầu, đa vũ trụ luôn không ngừng mở rộng và sinh ra vô số vũ trụ bên trong. Nhưng ở giai đoạn cuối, khi đó
                    đa vũ trụ sẽ bắt đầu co lại và các vũ trụ bên trong ngày càng bị kéo lại gần nhau dẫn đến sự đâm vào nhau của
                    các vũ trụ, gây ra vô số vết nứt không-thời gian làm nó trở nên cực kì bất ổn. Từ đó, dẫn đến vô số sự hủy diệt
                    của các vùng không-thời gian bên trong.</p>
                    
                   <p> RedPy - Một trong những đại lục địa nằm ở vùng trung tâm đa thời không và hiện tại đang nằm trong thời kì sụp đổ
                    của "Chu kì thời không". Do nằm ở vùng trung tâm đa thời không, nên RedPy trở thành một trong những không gian
                    trung chuyển giữa các không gian khác nhau một cách bắt đắc dĩ. Vô số các vết nứt thời không hình thành và mất đi
                    với tần suất ngày càng nhiều trong khoảng 1000 năm trở lại đây, dẫn đến vô số các sinh vật, các nền văn mình bị
                    kéo đến vùng đại lục này này và mắc kẹt ở đây. Ngoài ra còn có một số các chủng tộc chạy trốn sang do vùng không
                    thời gian của họ đã và đang bị sụp đổ.</p>
                    
                   <p> Ở lục địa RedPy, nhân loại (hay con gọi là loài người) là sinh vật thông minh chính gốc, đã sinh sống ở đây từ xa
                    xưa. Nhưng do những đứt gãy thời không mà một số các chủng tộc thông minh khác đã bị đẩy qua và kẹt lại ở lục địa
                    này. Trong các chủng tộc đó, nổi trội nhất là tộc Drawf và tộc Elf. </p>
                <p> -	Nhân loại là chủng tộc chính gốc ở thế giới RedPy, họ đã sinh sống và phát triển ở thế giới này từ rất xa xưa
                        do đó nền văn minh của họ khá phát triển và nó trải dài khắp lục địa RedPy. Nhưng trong khoảng thời gian gần
                        đây, một số chủng tộc từ thế giới khác đã xuất hiện dẫn đến sự thống trị trên lục đại RedPy của họ đang ngày
                        càng lung lay.</p>
                    <p> -	Tộc Drawf là chủng tộc đã tới đây khoảng 500 năm trước qua một khe nứt không gian ở vùng núi tuyết phía Bắc
                        lạnh giá, do bị kẹt lại nên họ quyết định định cư ở tại đó chờ ngày khe nứt mở ra một lần nữa để họ có thể
                        trở về. Họ là một chủng tộc có thể chất và sức đề kháng vượt trội, ngoài ra khả năng công nghệ và chế tác của
                        họ cũng cực kì hiện đại, do đó những công cụ và vũ khí của người Drawf luôn là những sản phẩm có chất lượng
                        cực cao, luôn được các quý tộc loài người ưa thích.</p>
                    <p> -	Ngược lại với tốc Drawf, tộc Elf đến với lục đia RedPy trễ hơn và không phải do tai nạn mà do sự di cư của họ. 
                        Elf là một chủng tộc sỡ hữu giác quan nhạy bén và ma thuật mạnh mẽ. Do thế giới của họ đã đi đến bờ vực sụp đổ
                        bởi "Chu kì thời không" nên họ đã nghiên cứu và sử dụng một vết nứt không gian nhân tạo giúp họ có thể trốn 
                        sang một thế giới khác. Do vậy, họ bị tộc Drawf kinh thường, gọi là "những kẻ bị quê hương ruồng bỏ" dẫn đến
                        quan hệ giữa 2 bộ tộc này không được tốt.</p>
                    <p>  -	Ngoài các chủng tộc lớn kể trên, các vết nứt thời không còn kéo theo nhiều sinh vật nguy hiểm từ các thế giới
                        khác đến nơi này mà dễ gặp nhất là tộc Orc, Goblin, Orge,...</p>
                    
                    <p> Người chơi chính là một trong những thực thể bị các đứt gãy không thời gian kéo đến RedPy, nhưng do có sự cố 
                    không đồng bộ về không thời gian giữa 2 thế giới mà họ bị mất đi kí ức và rơi vào một vòng lặp sinh tử vô hạn.
                    Điều đó nghĩa là họ không thể hoàn toàn chết đi mà họ sẽ liên tục được tái sinh ở nơi mà họ thân thuộc nhất trên
                    thế giới. Mỗi khi bị hạ gục, người chơi sẽ bị mất đi một vài mảnh kí ức và sau đó lập tức được tái sinh lại tại
                    một nơi nào đó trên lục địa. Họ không có nhiệm vụ chính của mình, vô cùng lạc lõng và rối ren, do đó họ chỉ có
                    thể liên tục tìm kiếm thông tin, hòa nhập thế giới này và khám phá những bí ẩn xung quanh đại lục địa mới mẻ này
                    và từ đó có thể tìm ra được nguồn gốc của bản thân.
                    </p>
                </div>
              </div>
              
              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    ARC1: THẾ GIỚI LẠ LẪM:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    ARC2: ÂM MƯU CỦA QUỶ TỘC:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                   ARC3: SỰ TRỖI DẬY CỦA UNDEAD:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    ARC4: THỜI KHÔNG HỖN LOẠN:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    ARC5: THỜI ĐẠI RỒNG:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+')'" tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    ARC6: DU HÀNH:
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p></p>
                </div>
              </div>

            </div>

          </div>
        
      </div>
  </Main>
</template>

<style scoped lang="css">

.image
{
  width: 2000px;
}

</style>