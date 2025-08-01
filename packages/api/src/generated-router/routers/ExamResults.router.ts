/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { TRPCRouterRecord } from "@trpc/server";
import * as _Schema from "@zenstackhq/runtime/zod/input";

import { db } from ".";
import { createTRPCRouter, procedure } from "../../trpc";
import { checkMutate, checkRead } from "../helper";

const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input($Schema.ExamResultsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.aggregate(input as any)),
      ),

    createMany: procedure
      .input($Schema.ExamResultsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.ExamResultsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.ExamResultsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.ExamResultsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.ExamResultsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input($Schema.ExamResultsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input($Schema.ExamResultsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.ExamResultsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input($Schema.ExamResultsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input($Schema.ExamResultsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.groupBy(input as any)),
      ),

    updateMany: procedure
      .input($Schema.ExamResultsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.ExamResultsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.update(input as any)),
      ),

    upsert: procedure
      .input($Schema.ExamResultsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).examResults.upsert(input as any)),
      ),

    count: procedure
      .input($Schema.ExamResultsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).examResults.count(input as any)),
      ),
  } satisfies TRPCRouterRecord);
}
