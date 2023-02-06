import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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
};

export type Materia = {
  __typename?: 'Materia';
  _id?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  headings: Array<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  value: Array<Scalars['String']>;
};

export type MateriaInput = {
  color?: InputMaybe<Scalars['String']>;
  headings?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMateria?: Maybe<Scalars['Boolean']>;
  removeMateria?: Maybe<Scalars['Boolean']>;
  updateMateria?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMateriaArgs = {
  materia: MateriaInput;
};


export type MutationRemoveMateriaArgs = {
  ID: Scalars['ID'];
};


export type MutationUpdateMateriaArgs = {
  ID: Scalars['ID'];
  materia: MateriaInput;
};

export type Query = {
  __typename?: 'Query';
  getMaterias: Array<Maybe<Materia>>;
  materia: Materia;
};


export type QueryMateriaArgs = {
  ID: Scalars['ID'];
};

export type MateriaListQueryVariables = Exact<{ [key: string]: never; }>;


export type MateriaListQuery = { __typename?: 'Query', getMaterias: Array<{ __typename?: 'Materia', _id?: string | null, label?: string | null, color?: string | null } | null> };

export type MateriaViewQueryVariables = Exact<{
  materiaId: Scalars['ID'];
}>;


export type MateriaViewQuery = { __typename?: 'Query', materia: { __typename?: 'Materia', label?: string | null, color?: string | null, headings: Array<string>, value: Array<string> } };

export const MateriaListDocument = gql`
    query MateriaList {
  getMaterias {
    _id
    label
    color
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MateriaListGQL extends Apollo.Query<MateriaListQuery, MateriaListQueryVariables> {
    override document = MateriaListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MateriaViewDocument = gql`
    query MateriaView($materiaId: ID!) {
  materia(ID: $materiaId) {
    label
    color
    headings
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MateriaViewGQL extends Apollo.Query<MateriaViewQuery, MateriaViewQueryVariables> {
    override document = MateriaViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }