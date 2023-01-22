import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  pc: boolean = true;
  searchForm: boolean = true;

  @Input() primaryMenu: any[] = [
    {
      name: 'Model',
      link: '#',
      model: [
        {
          name: 'Passenger',
          car: [
            {
              name: 'Swift',
              img: '/assets/suzuki-myanmar-carry-pro.png',
              link: '#',
            },
            {
              name: 'Ciaz',
              img: '/assets/suzuki-myanmar-carry-pro.png',
              link: '#',
            },
            {
              name: 'Ertiga',
              img: '/assets/suzuki-myanmar-carry-pro.png',
              link: '#',
            },
          ],
        },
        {
          name: 'Commercial',
          car: [
            {
              name: 'Carry Pro',
              img: '/assets/suzuki-myanmar-carry-pro.png',
              link: '#',
            },
          ],
        },
      ],
    },

    {
      name: 'After Sale',
      link: '#',
      child: [
        { name: 'About Us', link: '#' },
        { name: 'News', link: '#' },
        { name: 'FAQs', link: '#' },
        { name: 'Career', link: '#' },
      ],
    },

    {
      name: 'Coperate',
      link: '#',
      child: [
        { name: 'About Us', link: '#' },
        { name: 'News', link: '#' },
        { name: 'FAQs', link: '#' },
        { name: 'Press Releases', link: '#' },
      ],
    },
  ];

  ngOnInit() {
    if (window.innerWidth < 992) this.pc = false;
  }

  ngAfterViewInit() {
    const header: HTMLElement | null = document.querySelector('header');

    const megaMenu = header?.querySelectorAll('.megaMenu');

    megaMenu?.forEach((element) => {
      let ele = element.querySelector('.contentBox') as HTMLElement;
      let offsetVal: string | undefined =
        element.parentElement?.offsetLeft + 'px';

      ele.style.paddingLeft = offsetVal;
    });

    const searchBtn: HTMLElement | null = document.querySelector('.searchBar');

    const searchForm: HTMLElement | null =
      document.querySelector('.searchForm');

    const hamburgerBtn: HTMLElement | null =
      document.querySelector('.burgerMenu');

    const overlay = document.querySelector('.overlay');

    const humbergerList: HTMLElement | null =
      document.querySelector('.humbergerList');

    searchBtn?.addEventListener('click', () => {
      searchForm?.classList.toggle('show');
    });

    hamburgerBtn?.addEventListener('click', () => {
      hamburgerBtn?.classList.toggle('close');
      overlay?.classList.toggle('show');
      humbergerList?.classList.toggle('show');
    });
  }
}
