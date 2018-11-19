<template>
    <el-main>

        <div class="title">Todo</div>

        <!-- タスク入力 -->
        <el-form :model="form.todo" :rules="todoRules" ref="todo">
            <el-form-item label="" prop="name">
                <el-input v-model="form.todo.name" placeholder="タスク名を入力" clearable>
                    <el-button slot="append" class="add" size="mini" @click="insertTask">追加</el-button>
                </el-input>
            </el-form-item>
        </el-form>

        <!-- タスク一覧 -->
        <el-table :data="form.tasks" :show-header="false" stripe>
            <el-table-column prop="name" width="auto"></el-table-column>
            <el-table-column align="center" width="100px">
                <template slot-scope="record">
                    <el-button size="mini" type="danger" @click="deleteTask(record.$index)">削除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </el-main>
</template>

<script type="ts">

    import Translator from "@ts/Domain/Translator"
    import TodoUseCase from "@ts/Domain/UseCase/TodoUseCase"
    import Container from "@ts/Domain/Gateway/Container"

    const todoUseCase = new TodoUseCase(Container.get("TodoRepository"), Translator.todoForm())

    export default {
        data() {
            return {
                form: {},
                todoRules: {
                    name: [
                        {required: true, message: '入力必須です', trigger: 'blur'}
                    ]
                }
            }
        },
        created: function () {
            this.form = todoUseCase.getForm()
        },
        methods: {
            // タスク追加
            insertTask() {
                this.$refs.todo.validate((valid) => {
                    if (!valid) {
                        return
                    }

                    todoUseCase.addTodo(this.form.todo)
                })
            },
            // レコード削除
            deleteTask(index) {
                todoUseCase.deleteTodo(index)
            }
        }
    }
</script>

<style scoped lang="scss">
    main.el-main {
        width: 600px;
        margin: 0 auto;
    }
</style>