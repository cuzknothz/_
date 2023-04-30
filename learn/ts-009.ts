type MaybeString = string | null | undefined;

type DefinitelyString = NonNullable<MaybeString>;
