interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const emails : DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts : DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: DropdownItem<string>  | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
})

//인터페이스에 제네릭을 선언하는 방법
interface dropdown {
  value: string;
  selected: boolean;
}

const obj2 : dropdown = {
  value: 'ok', 
  selected:false
}

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj3: Dropdown<string> = {
  value:'okay',
  selected: true
}