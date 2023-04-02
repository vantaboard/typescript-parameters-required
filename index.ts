interface Foo {
    bar?: (baz: string) => void;
}

type FooBarParamsRequired = Parameters<Required<Foo['bar']>>;
