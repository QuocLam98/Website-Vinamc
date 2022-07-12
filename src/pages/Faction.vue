<script setup lang="ts">
import Main from '@/layouts/Main.vue'
import bg from '@/assets/img/backrpg.png'
import fac from '@/assets/img/faction.png'
import Wooden from '@/assets/img/wooden_side_bg.png'

</script>

<template>
<Main>
    <div class="hero min-h-screen bg-local" :style="'background-image: url('+bg+');'">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content flex-col lg:flex-row-reverse bg-base-200   " >
            <div class="flex flex-col ">
            <img :src="fac" class=" size rounded-lg shadow-2xl"  />
            </div>

            <div class="flex flex-col">
              <div class="m-10 text-neutral-900 text-xl font-medium"> <h1>Lối chơi của chế độ Faction</h1></div>

            <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"  tabindex="0" >
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                  Các lệnh cơ bản đến nâng cao trong factions:
                </div>
                <div class="collapse-content text-black "> 
                  <p class="ext-neutral-900 text-xl font-medium">a. Lệnh cơ bản</p>
                   <ul type="number">
                    <li>/f help [số trang]  Hiển thị lệnh.</li>
                    <li>/f list [số trang]  Hiển thị danh sách facs</li>
                    <li> /f show [fac tag]  Hiển thị chi tiết về fac</li>
                    <li> /f map [on/off]  Hiển thị bản đồ</li>
                    <li>/f p [tên người]  Hiển thị năng lượng của nhân vật.</li>
                    <li>/f join [tên fac]  Vào fac</li>
                    <li>/f leave  Thoát fac</li>
                    <li> /f chat  Bật on và off cho fac chat</li>
                    <li> /f home  Biến về fac home</li>
                   </ul>
                   <br>
                    
                   <p class="ext-neutral-900 text-xl font-medium"> b. Lệnh tạo faction</p>
                   <ul type="number">
                    <li>/f create [fac tag]  Tạo fac mới.</li>
                    <li>/f desc [ghi thông báo]  Thay đổi thông báo fac</li>
                    <li> /f tag [fac tag]  Thay đổi fac tag</li>
                    <li> /f open  Bật, tắt nếu lời mời là cần thiết để vào fac</li>
                    <li>/f invite [Tên người]  Mời một người vào fac</li>
                    <li>/f deinvite [Tên người]  Hủy bỏ lời mời vào fac</li>
                    <li>/f sethome  Đặt fac home</li>
                   </ul>
                   <br>
                    
                   <p  class="ext-neutral-900 text-xl font-medium">c. Lệnh Claim đất trong faction.</p>
                   <ul type="number">
                    <li>/f claim (kiểu)  Các kiểu  o : 1 mảnh, square : theo hình vuông, auto : tự động</li>
                    <li>/f autoclaim  Khởi động auto-chiếm đóng khi bạn đi ngang khu đất</li>
                    <li> /f unclaim , declaim  Unclaim nơi bạn đang đứng</li>
                   </ul>
                   <br>
                    
                   <p class="ext-neutral-900 text-xl font-medium" >d. Lệnh quản lý thành viên và liên minh faction </p>
                   <ul type="number">
                    <li>/f owner [Tên người]  Đặt/Gỡ bỏ quyền sở hữu 1 chunk cho 1 người trong fac.</li>
                    <li>/f ownerlist  Xem danh sách của chủ sở hữu chunk trong fac</li>
                    <li>/f kick [tên người]  Kick một người ra khỏi fac</li>
                    <li>/f officer [tên người]  Cho một người làm phó fac</li>
                    <li>/f leader [tên người]  Cho một người làm chủ fac</li>
                    <li>/f noboom  Bật / tắt nổ trong fac</li>
                    <li>/f ally [tên fac]  Đồng bạnnh với fac khác</li>
                    <li>/f neutral [tên fac]  Bình thường với fac khác</li>
                    <li>/f enemy [tên fac]  Đối thủ với fac khác</li>
                   </ul>
                   <br>

                <p class="ext-neutral-900 text-xl font-medium">e. Quản lý tiền trong faction</p>
                <ul type="number">
                  <li>/f money balance  Hiển thị số tiền trong fac</li>
                  <li>/f money deposit (tiền)  Đóng góp tiền vào fac</li>
                  <li>/f money withdraw (tiền)  Lấy tiển ra fac</li>
                  <li>/f money ff (tiền) (tên fac) (tên fac)  Chuyển tiền từ fact này sang fac khác</li>
                  <li>/f money fp (tiền) (tên fac) (tên người)  Chuyền tiền từ fact sang người chơi</li>
                  <li>/f money pf (tiền) (tên người) (tên fac)  Chuyển tiền từ người chơi sang fac</li>
                 </ul>

                </div>
              </div>

              <div class="m-10 text-neutral-900 text-xl font-medium"> <h1>Hướng dẫn sơ lược cách chơi trong Factions </h1></div>
              
              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"  tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                  I. Power
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p>Khi vào máy chủ mỗi nhân vật mặc định sẽ có 10 Power tối thiểu là -10 </p>
                  <br>
                  <p>Mỗi khi người chơi chết họ sẽ mất 2 pow, mỗi khi online họ sẽ được phục hồi 4 pow/ 1 giờ, power sẽ phục hồi cho đến khi đạt đến tối đa của người chơi (10 pow). Để xem pow của mình, bạn gõ lệnh /f p để xem pow của người khác, bạn gõ /f p tên</p>
                  <br>
                  <p>Đó là pow của người chơi, còn bây giờ nói về pow của faction. Pow của faction sẽ bằng tổng pow của các thành viên trong faction. Ví dụ faction của bạn chỉ có mình bạn, hiện tại bạn có 4 pow thì faction của bạn có 4 pow. Nếu faction của bạn có 2 thành viên, A và B, A có 10 pow, B có -8 thì pow faction sẽ là 2.</p>
                  <br>  
                  <p>Vì vậy hãy cân nhắc khi mời người khác vào Faction của bạn, vì họ có thể đem đến cho bạn 10 pow, nhưng cũng có thể làm mất faction của bạn 20 pow ( 10 mang đến và 10 bị âm).</p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"  tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                  II. Claim ( đóng chiếm đất )
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p>Trước tiên, muốn claim đất thì người chơi phải có faction và muốn claim đất thì faction của bạn phải có pow, số đất có thể claim tương ứng với số pow mà faction của bạn có. Cứ mỗi một pow, faction của bạn sẽ được claim 1 chunk, chunk là một hình hộp có mặt đáy vuông diện tích = 16×16 ô (block), chiều cao từ bedrock đến tận trời</p>
                <br>
                  <p>Lưu ý là chunk là khối cố định, không phải 16×16 ô bất kỳ là tạo thành một chunk, mà là 16×16 ô định trước.</p>
               <br>
                  <p>Để xem chunk mà bạn đang đứng, bạn gõ lệnh /f sc nó sẽ hiện lên một làn khói ở biên giới của chunk mà bạn đang đứng.</p>
               <br>
                  <p>Về claim đất, ví dụ faction của bạn có 10 pow, bạn sẽ có thể claim được tối đa 10 chunk . Nếu faction của bạn bị âm pow, bạn sẽ không thể claim đất. Số chunk có thể claim luôn nhỏ hơn số pow faction bạn có</p>
              <br>
                  <p>Khi số chunk faction bạn claim thấp hơn số pow faction bạn có, faction của bạn sẽ ở trạng thái ổn định, và faction khác sẽ không thể claim đất mà faction bạn đang có.</p>
                <br>
                  <p>Nhưng nếu như số chunk đất mà bạn có lớn hơn số pow mà bạn có, ví dụ faction của bạn có 10 thành viên, có số pow tối đa là 100 pow, bạn claim 100 chunk đất, và chẳng may các thành viên của faction chết nhiều lần quá, số power giảm xuống còn 60, faction của bạn sẽ rơi vào trạng thái mất ổn định, khi này faction khác có thể claim vùng đất mà faction bạn đang có. Và nếu điều này xảy ra thì tất cả những thứ mà bạn xây dựng, cất giữ trên đất đó sẽ thuộc về người khác.</p>
                <br>
                  <p>Lưu ý:</p>
               <br>
                  <p>Đất, có 3 loại đất, 1 là Đất Warzone (bao gồm khu spawn và các khu warp) là của đất công của server, tất nhiên bạn không thể làm gì đất này, 2 là đất hoang (Wilderness) bạn có thể claim, 3 là đất của faction khác, chỉ claim được khi faction họ rơi vào trạng thái mất ổn định.</p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"   tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                  III. PvP (Cuộc chiến bang hội)
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p>Mối quan hệ của bạn với một faction khác được chia làm 3 loại cơ bản: </p>
                  <br>
                   <ul>
                    <li> Neutral (trung lập)</li>
                    <li> Enemy (kẻ thù)</li>
                    <li> Ally (đồng minh)</li>
                   </ul>
                   <br>
                   <p>Mặc định mối quan hệ giữa các faction là Neutral, khi muốn chuyển qua mối quan hệ khác, bạn gõ lệnh như sau /f enemy tên-faction-khác để chuyển sang làm kẻ thù của nhau, /f ally tên để chuyển sang làm đồng minh của nhau, và /f neutral tên để quay lại trạng thái trung lập.</p>
                <br>
                <p>Người chơi ở faction Neutral sẽ không thể đánh bạn khi bạn đang ở trên đất của mình, chỉ có thể đánh bạn khi bạn ở ngoài.</p>
              <br>
              <p>Người chơi ở faction enemy có thể đánh bạn kể cả khi bạn đang ở trên đất của mình</p>   
            <br>
            <p>Người chơi ở faction Ally với faction bạn không thể đánh bạn ở bất kỳ nơi đâu</p>  
            </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"  tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                  IV. Căn cứ, pháo đài
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p>Đầu tiên tôi sẽ nói cho bạn biết cách mà kẻ thù của bạn sẽ chiếm đoạt đất đai của bạn, giết bạn, chinh phục bạn như thế nào. Kẻ thù của bạn phát hiện ra nhà của bạn, họ sẽ tìm cách giết bạn để hạ thấp pow của faction của bạn xuống đến mức mất ổn định. Lúc này họ sẽ có thể claim đất của bạn và chiếm đoạt tất cả.</p>
                  <br>
                  <p>Bạn nói bạn sẽ trốn vào trong nhà và không ra ngoài, họ sẽ không giết được bạn? đúng, nhưng chỉ cần nhà của bạn có một lỗ nhỏ, họ sẽ dùng Enderpearl ném qua đó và họ sẽ lọt được vào nhà bạn và giết bạn.</p>
                  <br>
                  <p>Hoặc có khi bạn làm nhà kín mít rồi, nhưng trong nhà của bạn có một cánh cổng đi đến địa ngục, và khi kẻ thù của bạn ở địa ngục vô tình phát hiện ra cánh cổng tương ứng, họ có thể đi qua đó để vào nhà của bạn và giết bạn.</p>
                  <br>
                  <p>Vậy thì khi bị kẻ thù truy đuổi tôi sẽ offline! Nếu vậy, họ không giết được bạn, không chiếm được đất của bạn, nhưng họ vẫn sẽ có cách làm cho nó tan hoang, và khi bạn online trở lại thì đã thấy ngôi nhà của mình nát be bét. Họ sẽ đứng ở bên ngoài ngôi nhà của bạn, chế tạo một máy phóng TNT (canon) và bắn vào nhà của bạn.</p>
                  <br>
                  <p>Hoặc khi bạn làm nhà giữa một rừng cây, họ không thể trực tiếp đốt nhà của bạn được, nhưng họ có thể đốt những cây ở bên ngoài nhà của bạn, và nó sẽ cháy lan sang nhà bạn…và rất nhiều cách khác.</p>
                </div>
              </div>

              <div class="collapse border border-base-300 bg-base-100 rounded-box bg-cover bg-center bg-opacity-60" :style="'background-image: url('+Wooden+');'"  tabindex="0">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title text-neutral-900 text-xl font-medium">
                    Kết luận
                </div>
                <div class="collapse-content text-neutral-900 "> 
                  <p class="text-neutral-900 text-xl font-medium">Đó là lý do mà chúng ta sẽ phải xây cho mình một căn cứ vững chãi có ít nhất vài tiêu chuẩn sau</p>
                  <ol >
                    <li>1. Không nên claim đất hết số pow mà bạn có, chẳng hạn bạn có 10 pow, bạn claim hết số pow đó, vậy là số đất trên số pow của bạn là 10/10, và kẻ thù của bạn chỉ cần giết bạn một lần duy nhất là đủ để faction của bạn rơi vào trạng thái mất ổn định. </li>
                    <li>2. Hãy chỉ xây dựng trên phần đất đã claim, xây ở ngoài đất hoang (wilderness) thì bất kỳ ai cũng có thể phá.</li>
                    <li>3. Bạn không nên xây hết trên phần đất của bạn, hãy xây căn cứ ở giữa mảnh đất, và để một vùng đệm giữa Wilderness (đất hoang) và căn cứ của bạn. Kẻ thù của bạn chỉ có thể xây Canon (máy phóng TNT) trên phần đất hoang, và tầm xa của canon cũng chỉ giới hạn, nên nếu vùng đệm mà lớn, họ sẽ không thể phóng TNT đến được nhà của bạn.</li>
                    <li>4. Hãy sử dụng các loại vật liệu khó phá vỡ như đá, Obsidian thay vì gỗ. Bao bọc căn cứ bằng nhiều lớp như nước, obsidian..vv</li>
                    <li>5. Hãy đặt điểm set home /sethome và set fhome /f sethome ở những phòng, vị trí khó tìm trong căn cứ của bạn, nếu kẻ thù của bạn có vào được nhà của bạn, giết bạn một lần, sau đó bạn hồi sinh, thì kẻ thù cũng khó giết bạn lần tiếp theo.</li>
                    <li>6. Dùng chức năng tìm vùng đất hoang ở /taxi  để đến những vùng hẻo lánh chưa ai đến</li>
                    <li>7. Làm nhà ở dưới lòng đất, hoặc dưới biển sâu. Tuy khó xây dựng nhưng an toàn hơn và khó phá hơn, khó tìm hơn.</li>
                    <li>8. Cuối cùng bạn chơi không nỗi thì nên qua thể loại dễ hơn là skyblock tại IP : minehot.com để sinh tồn</li>
                  </ol>

                </div>
              </div>

            </div>

          </div>
        
      </div>
    </Main>


</template>

<style scoped lang="css">

.size {
    width: 2000px;
}

</style>