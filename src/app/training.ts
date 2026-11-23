// ===== 1. ИНТЕРФЕЙСЫ =====

interface IUser {
  id?: number;
  name: string;
  email: string;
  age: number;
}

interface IAdmin extends IUser {
  phone: string;
  isActive: boolean;
}

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

const users: IUser[] = [
  {
    id: 1,
    name: 'Иван',
    email: 'ivan@mail.com',
    age: 25
  },
  {
    id: 2,
    name: 'Марат',
    email: 'Marat@mail.com',
    age: 18
  },
  {
    id: 3,
    name: 'Jon',
    email: 'jon@mail.com',
    age: 20
  }
];

const adultUsers = users.filter((user) => {
  return user.age >= 20;
});

function sum(a: number, b: number): number {
  return a + b;
}

function formatText(text: string, format: typeof textFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return text;
}

function removeSymbol(a: string, b: string): string {
  return a.replaceAll(b, '');
}

console.log(sum(5, 3));

console.log(formatText('hello world', 'uppercase'));
console.log(formatText('HELLO WORLD', 'lowercase'));
console.log(formatText('hELLO WORLD', 'capitalize'));

console.log(removeSymbol('hello world', 'l'));

console.log(adultUsers);