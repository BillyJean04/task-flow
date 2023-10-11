/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A high precision floating point value represented as a string */
    BigFloat: any;
    /** An arbitrary size integer represented as a string */
    BigInt: any;
    /** An opaque string using for tracking a position in results during pagination */
    Cursor: any;
    /** A date wihout time information */
    Date: any;
    /** A date and time */
    Datetime: any;
    /** A Javascript Object Notation value serialized as a string */
    JSON: any;
    /** Any type not handled by the type system */
    Opaque: any;
    /** A time without date information */
    Time: any;
    /** A universally unique identifier */
    UUID: any;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
    eq?: InputMaybe<Scalars["BigFloat"]>;
    gt?: InputMaybe<Scalars["BigFloat"]>;
    gte?: InputMaybe<Scalars["BigFloat"]>;
    in?: InputMaybe<Array<Scalars["BigFloat"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["BigFloat"]>;
    lte?: InputMaybe<Scalars["BigFloat"]>;
    neq?: InputMaybe<Scalars["BigFloat"]>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
    eq?: InputMaybe<Scalars["BigInt"]>;
    gt?: InputMaybe<Scalars["BigInt"]>;
    gte?: InputMaybe<Scalars["BigInt"]>;
    in?: InputMaybe<Array<Scalars["BigInt"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["BigInt"]>;
    lte?: InputMaybe<Scalars["BigInt"]>;
    neq?: InputMaybe<Scalars["BigInt"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
    eq?: InputMaybe<Scalars["Boolean"]>;
    is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
    eq?: InputMaybe<Scalars["Date"]>;
    gt?: InputMaybe<Scalars["Date"]>;
    gte?: InputMaybe<Scalars["Date"]>;
    in?: InputMaybe<Array<Scalars["Date"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["Date"]>;
    lte?: InputMaybe<Scalars["Date"]>;
    neq?: InputMaybe<Scalars["Date"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
    eq?: InputMaybe<Scalars["Datetime"]>;
    gt?: InputMaybe<Scalars["Datetime"]>;
    gte?: InputMaybe<Scalars["Datetime"]>;
    in?: InputMaybe<Array<Scalars["Datetime"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["Datetime"]>;
    lte?: InputMaybe<Scalars["Datetime"]>;
    neq?: InputMaybe<Scalars["Datetime"]>;
};

export enum FilterIs {
    NotNull = "NOT_NULL",
    Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
    eq?: InputMaybe<Scalars["Float"]>;
    gt?: InputMaybe<Scalars["Float"]>;
    gte?: InputMaybe<Scalars["Float"]>;
    in?: InputMaybe<Array<Scalars["Float"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["Float"]>;
    lte?: InputMaybe<Scalars["Float"]>;
    neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
    eq?: InputMaybe<Scalars["ID"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
    eq?: InputMaybe<Scalars["Int"]>;
    gt?: InputMaybe<Scalars["Int"]>;
    gte?: InputMaybe<Scalars["Int"]>;
    in?: InputMaybe<Array<Scalars["Int"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["Int"]>;
    lte?: InputMaybe<Scalars["Int"]>;
    neq?: InputMaybe<Scalars["Int"]>;
};

export type Lists = Node & {
    __typename?: "Lists";
    created_at: Scalars["Datetime"];
    id: Scalars["BigInt"];
    img?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    /** Globally Unique Record Identifier */
    nodeId: Scalars["ID"];
    user_id: Scalars["UUID"];
};

export type ListsConnection = {
    __typename?: "ListsConnection";
    edges: Array<ListsEdge>;
    pageInfo: PageInfo;
};

export type ListsDeleteResponse = {
    __typename?: "ListsDeleteResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Lists>;
};

export type ListsEdge = {
    __typename?: "ListsEdge";
    cursor: Scalars["String"];
    node: Lists;
};

export type ListsFilter = {
    created_at?: InputMaybe<DatetimeFilter>;
    id?: InputMaybe<BigIntFilter>;
    img?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    nodeId?: InputMaybe<IdFilter>;
    user_id?: InputMaybe<UuidFilter>;
};

export type ListsInsertInput = {
    created_at?: InputMaybe<Scalars["Datetime"]>;
    img?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    user_id?: InputMaybe<Scalars["UUID"]>;
};

export type ListsInsertResponse = {
    __typename?: "ListsInsertResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Lists>;
};

export type ListsOrderBy = {
    created_at?: InputMaybe<OrderByDirection>;
    id?: InputMaybe<OrderByDirection>;
    img?: InputMaybe<OrderByDirection>;
    name?: InputMaybe<OrderByDirection>;
    user_id?: InputMaybe<OrderByDirection>;
};

export type ListsUpdateInput = {
    created_at?: InputMaybe<Scalars["Datetime"]>;
    img?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    user_id?: InputMaybe<Scalars["UUID"]>;
};

export type ListsUpdateResponse = {
    __typename?: "ListsUpdateResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Lists>;
};

/** The root type for creating and mutating data */
export type Mutation = {
    __typename?: "Mutation";
    /** Deletes zero or more records from the `Lists` collection */
    deleteFromListsCollection: ListsDeleteResponse;
    /** Deletes zero or more records from the `Tags` collection */
    deleteFromTagsCollection: TagsDeleteResponse;
    /** Adds one or more `Lists` records to the collection */
    insertIntoListsCollection?: Maybe<ListsInsertResponse>;
    /** Adds one or more `Tags` records to the collection */
    insertIntoTagsCollection?: Maybe<TagsInsertResponse>;
    /** Updates zero or more records in the `Lists` collection */
    updateListsCollection: ListsUpdateResponse;
    /** Updates zero or more records in the `Tags` collection */
    updateTagsCollection: TagsUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromListsCollectionArgs = {
    atMost?: Scalars["Int"];
    filter?: InputMaybe<ListsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromTagsCollectionArgs = {
    atMost?: Scalars["Int"];
    filter?: InputMaybe<TagsFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoListsCollectionArgs = {
    objects: Array<ListsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoTagsCollectionArgs = {
    objects: Array<TagsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateListsCollectionArgs = {
    atMost?: Scalars["Int"];
    filter?: InputMaybe<ListsFilter>;
    set: ListsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateTagsCollectionArgs = {
    atMost?: Scalars["Int"];
    filter?: InputMaybe<TagsFilter>;
    set: TagsUpdateInput;
};

export type Node = {
    /** Retrieves a record by `ID` */
    nodeId: Scalars["ID"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
    eq?: InputMaybe<Scalars["Opaque"]>;
    is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
    /** Ascending order, nulls first */
    AscNullsFirst = "AscNullsFirst",
    /** Ascending order, nulls last */
    AscNullsLast = "AscNullsLast",
    /** Descending order, nulls first */
    DescNullsFirst = "DescNullsFirst",
    /** Descending order, nulls last */
    DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
    __typename?: "PageInfo";
    endCursor?: Maybe<Scalars["String"]>;
    hasNextPage: Scalars["Boolean"];
    hasPreviousPage: Scalars["Boolean"];
    startCursor?: Maybe<Scalars["String"]>;
};

/** The root type for querying data */
export type Query = {
    __typename?: "Query";
    /** A pagable collection of type `Lists` */
    listsCollection?: Maybe<ListsConnection>;
    /** Retrieve a record by its `ID` */
    node?: Maybe<Node>;
    /** A pagable collection of type `Tags` */
    tagsCollection?: Maybe<TagsConnection>;
};

/** The root type for querying data */
export type QueryListsCollectionArgs = {
    after?: InputMaybe<Scalars["Cursor"]>;
    before?: InputMaybe<Scalars["Cursor"]>;
    filter?: InputMaybe<ListsFilter>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<ListsOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
    nodeId: Scalars["ID"];
};

/** The root type for querying data */
export type QueryTagsCollectionArgs = {
    after?: InputMaybe<Scalars["Cursor"]>;
    before?: InputMaybe<Scalars["Cursor"]>;
    filter?: InputMaybe<TagsFilter>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
    eq?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    ilike?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    iregex?: InputMaybe<Scalars["String"]>;
    is?: InputMaybe<FilterIs>;
    like?: InputMaybe<Scalars["String"]>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    neq?: InputMaybe<Scalars["String"]>;
    regex?: InputMaybe<Scalars["String"]>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tags = Node & {
    __typename?: "Tags";
    created_at: Scalars["Datetime"];
    id: Scalars["BigInt"];
    img?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    /** Globally Unique Record Identifier */
    nodeId: Scalars["ID"];
    user_id: Scalars["UUID"];
};

export type TagsConnection = {
    __typename?: "TagsConnection";
    edges: Array<TagsEdge>;
    pageInfo: PageInfo;
};

export type TagsDeleteResponse = {
    __typename?: "TagsDeleteResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Tags>;
};

export type TagsEdge = {
    __typename?: "TagsEdge";
    cursor: Scalars["String"];
    node: Tags;
};

export type TagsFilter = {
    created_at?: InputMaybe<DatetimeFilter>;
    id?: InputMaybe<BigIntFilter>;
    img?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    nodeId?: InputMaybe<IdFilter>;
    user_id?: InputMaybe<UuidFilter>;
};

export type TagsInsertInput = {
    created_at?: InputMaybe<Scalars["Datetime"]>;
    img?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    user_id?: InputMaybe<Scalars["UUID"]>;
};

export type TagsInsertResponse = {
    __typename?: "TagsInsertResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Tags>;
};

export type TagsOrderBy = {
    created_at?: InputMaybe<OrderByDirection>;
    id?: InputMaybe<OrderByDirection>;
    img?: InputMaybe<OrderByDirection>;
    name?: InputMaybe<OrderByDirection>;
    user_id?: InputMaybe<OrderByDirection>;
};

export type TagsUpdateInput = {
    created_at?: InputMaybe<Scalars["Datetime"]>;
    img?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    user_id?: InputMaybe<Scalars["UUID"]>;
};

export type TagsUpdateResponse = {
    __typename?: "TagsUpdateResponse";
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars["Int"];
    /** Array of records impacted by the mutation */
    records: Array<Tags>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
    eq?: InputMaybe<Scalars["Time"]>;
    gt?: InputMaybe<Scalars["Time"]>;
    gte?: InputMaybe<Scalars["Time"]>;
    in?: InputMaybe<Array<Scalars["Time"]>>;
    is?: InputMaybe<FilterIs>;
    lt?: InputMaybe<Scalars["Time"]>;
    lte?: InputMaybe<Scalars["Time"]>;
    neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
    eq?: InputMaybe<Scalars["UUID"]>;
    in?: InputMaybe<Array<Scalars["UUID"]>>;
    is?: InputMaybe<FilterIs>;
    neq?: InputMaybe<Scalars["UUID"]>;
};

export type GetCategoriesQueryVariables = Exact<{
    userId: Scalars["UUID"];
}>;

export type GetCategoriesQuery = {
    __typename?: "Query";
    listsCollection?: {
        __typename?: "ListsConnection";
        edges: Array<{ __typename?: "ListsEdge"; node: { __typename?: "Lists"; name: string } }>;
    } | null;
    tagsCollection?: {
        __typename?: "TagsConnection";
        edges: Array<{ __typename?: "TagsEdge"; node: { __typename?: "Tags"; name: string } }>;
    } | null;
};

export const GetCategoriesDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetCategories" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } } },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "listsCollection" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "filter" },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [
                                        {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "user_id" },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [
                                                    {
                                                        kind: "ObjectField",
                                                        name: { kind: "Name", value: "eq" },
                                                        value: {
                                                            kind: "Variable",
                                                            name: { kind: "Name", value: "userId" },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "node" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "tagsCollection" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "filter" },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [
                                        {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "user_id" },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [
                                                    {
                                                        kind: "ObjectField",
                                                        name: { kind: "Name", value: "eq" },
                                                        value: {
                                                            kind: "Variable",
                                                            name: { kind: "Name", value: "userId" },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "node" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
