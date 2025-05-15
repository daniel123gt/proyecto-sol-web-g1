import { Component } from '@angular/core';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import{NgFor} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CardProductComponent, PaginatorComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'


})
export class ListComponent {
  listaProductos  = [
    {
      nombre: 'GASEOSA COCA COLA',
      codigo: '000020',
      imagen: 'https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg',
      stock: '10',
    },
    {
      nombre: 'GASEOSA PEPSI COLA',
      codigo: '000021',
      imagen: 'https://mma.prnewswire.com/media/2351693/Pepsi_Logo.jpg?w=200',
      stock: '10',
    },
    {
      nombre: 'CHEESE TRIS',
      codigo: '000030',
      imagen: 'https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/271648815_108720351708567_3473631671237367813_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9IelTxn1eJQQ7kNvwEu5rmA&_nc_oc=AdldBXCcE91HuKWsTdwORgGBIo41z9ZVOqgvH6_cJDl--ZnAH650MslQhaJczKQOx8Y&_nc_zt=23&_nc_ht=scontent.flim24-1.fna&_nc_gid=Oq0q0osBDdXefw_tKwhu2A&oh=00_AfEVeO6hvj2oQdtHGINKUHPcjU55JtTAc2vkFDNubwF9PQ&oe=681B5704',
      stock: '10',
    },
    {
      nombre: 'PAPITAS LAYS',
      codigo: '000031',
      imagen: 'https://static.vecteezy.com/system/resources/previews/008/855/004/non_2x/minsk-belarus-june-2022-logo-lay-s-classic-free-photo.jpg',
      stock: '10',
    },
    {
      nombre: 'SODA SAN JORGE',
      codigo: '000010',
      imagen: 'https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/275612463_115232397766419_4111507133832967210_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aXpXJ7psPp4Q7kNvwGGFgZu&_nc_oc=AdmMovdyoG_kZ7acsuw-6d_JsrFXweDTImKleFA73rCgkldyG3T8Zx20SpKlK1R2-pM&_nc_zt=23&_nc_ht=scontent.flim24-1.fna&_nc_gid=qb7n3f2jYat7XVwKU-Lr1w&oh=00_AfEMsxL1Tnaob2enu7u50X-21Cs2zlS2XYAk_VqaaeG17w&oe=681B372E',
      stock: '10',
    },
    {
      nombre: 'GALLETA MARGARITA',
      codigo: '000011',
      imagen: 'https://pbs.twimg.com/profile_images/378800000754923758/602e576c656530aed6c6fc1ad4fb330e_400x400.jpeg',
      stock: '10',
    },
    {
      nombre: 'VINO QUEIROLO',
      codigo: '000040',
      imagen: 'https://scontent.flim24-1.fna.fbcdn.net/v/t1.6435-9/69930712_1173612356160264_8146969484909871104_n.png?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=drhm2R0-8sQQ7kNvwHHNHkH&_nc_oc=AdlwB9o7kTw1cMDpyInpaf-LAU--H4ZuxFrcQoTwfuGBP9v0-XuVc4tTcyzdLnq4k1k&_nc_zt=23&_nc_ht=scontent.flim24-1.fna&_nc_gid=V2okpI3LdXYiSiGacMoHZQ&oh=00_AfFV1_TNu_CIZTQ_GOYPClVeMRI7LiJSHYiKfUT7lT8yUA&oe=683CEB59',
      stock: '10',
    },
    {
      nombre: 'CERVEZA CUSQUEÑA',
      codigo: '000041',
      imagen: 'https://pressreleasecom.wordpress.com/wp-content/uploads/2017/07/pressrelease-8c2aa-cerveza-cusquec3b1a.jpg',
      stock: '10',
    }
  ]

}