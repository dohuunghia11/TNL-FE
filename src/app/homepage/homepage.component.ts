import { Component, OnInit } from '@angular/core';
import {ApartmentService} from '../apartment.service';
import {Apartment} from '../model/Apartment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  apartments: Apartment[] = [
    {
      id: 1, name: 'Premium Luxury',
      address: 'Binh Thanh, Ho Chi Minh, VietNam', numberOfRooms: '4', numberOfBathrooms: '2',
      description: 'Căn hộ penhouse 3 phòng ngủ với nội thất đẳng cấp và dịch vụ tiện nghi 5 sao! Hệ thống rạp phim tại gia siêu ' +
        'đỉnh, máy pha cà phê tiện lợi và ghế massage cho bạn thư giãn sau một ngày dài làm việc! Hơn thế nữa, khoảnh khắc ngắm nhìn' +
        ' thành phố lên đèn từ ban công hứa hẹn sẽ khiến bạn bất ngờ!\n' + 'Bạn sẽ ngỡ như mình đang ở trung tâm của New York khi ' +
        'tận hưởng ban công riêng của căn hộ và ngắm nhìn thành phố khi nó lấp lánh sống động vào ban đêm. Ánh đèn bật lên trong ' +
        'các tòa nhà xung quanh một cách chậm chạp khi mặt trời lặn và thành phố như chìm trong sắc thái ấm áp của hoàng hôn màu ' +
        'hồng. Landmark81 rất gần, bạn sẽ cảm thấy như bạn có thể vươn ra và chạm vào nó. Bạn sẽ thực sự được tận hưởng một Sài Gòn' +
        ' của riêng bạn. Căn hộ được xây dựng với những tiện nghi tốt nhất trong khu vực. Với nội thất hoàn toàn mới, nơi bạn có thể ' +
        'kiểm soát khí hậu trong nhà của riêng bạn. Nhà bếp với các thiết bị tốt nhất và 3 phòng ngủ có kích thước lớn với khăn trải' +
        ' giường tốt nhất và đồ nội thất sang trọng để chiều chuộng bạn.', area: '2000 m2', category: 'apartment',
      image: 'https://cdn.luxstay.com/rooms/19033/large/room_19033_97_1547110185.jpg', prize: '2500.000', rate: '3'
    },
    {
      id: 2, name: 'Homelead_Flamingo', address: 'Phuc Yen, Vinh Phuc, VietNam', numberOfRooms: '4', numberOfBathrooms: '3',
      // tslint:disable-next-line:max-line-length
      description: 'Villa Flamingo 02 phòng ngủ được thiết kế theo phong cách kiến trúc đương đại với các nét chấm phá tinh tế và góc cạnh. ' +
        'Mỗi góc nhìn tại đây đều mở ra không gian ngoài trời với cảnh quan tuyệt đẹp phía trước và khuôn viên vườn xanh mát',
      category: 'villa', image: 'https://cdn.luxstay.com/rooms/24653/large/room_24653_38_1563794487.jpg', area: '3000 m2',
      prize: '3600000', rate: '4'
    },
    {
      id: 3, name: 'Tom\'s Valley', address: 'Da Lat, Lam Dong, VietNam', numberOfRooms: '1', numberOfBathrooms: '2',
      description: 'Căn hộ studio cực rộng áp mình bên sườn thung lũng, với 2 mặt kính nhìn ra không gian ngút ngàn phía dưới, ' +
        'thực sự là một trải nghiệm tuyệt vời',
      category: 'villa', image: 'https://cdn.luxstay.com/rooms/11978/large/1539665147_IMG-8631.JPG', area: '4000 m2',
      prize: '1000000', rate: '3.5'
    },
    {
      id: 4, name: 'LUXURY APARTMENT', address: 'Lieu Giai, Ba Dinh, Ha Noi, VietNam', numberOfRooms: '2', numberOfBathrooms: '2',
      description: 'Căn hộ của chúng tôi ở tầng cao, view hồ, được trang bị đầy đủ nội thất sang trọng, diện tích 82m2, 2 phòng ngủ, ' +
        '2 phòng tắm, 1 không gian sinh hoạt rộng rãi và bếp tách biệt. Bacony với ánh nắng mặt trời và tầm nhìn tuyệt vời, an ninh 24/7 ' +
        'và đường dây nóng 24/7.',
      category: 'apartment', image: 'https://cdn.luxstay.com/rooms/23763/large/room_23763_30_1555683880.jpg', area: '5000 m2',
      prize: '1550000', rate: '4'
    }
  ];
  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    // this.apartmentService.getApartments()
    //   .subscribe(next => {
    //     this.apartments = next;
    //   });
  }

}
