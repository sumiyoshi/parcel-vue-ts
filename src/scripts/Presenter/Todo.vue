<template>
  <div class="main">

    <div class="title">Todo</div>

    <!-- タスク入力 -->
    <el-form
      ref="todo"
      :model="todoUseCase.getForm().todo"
      :rules="todoRules"
    >
      <el-form-item
        label=""
        prop="name">
        <el-input
          v-model="todoUseCase.getForm().todo.name"
          placeholder="タスク名を入力"
          clearable>
          <el-button
            slot="append"
            class="add"
            size="mini"
            @click="insertTask">追加
          </el-button>
        </el-input>
      </el-form-item>
    </el-form>

    <!-- タスク一覧 -->
    <el-table
      :data="todoUseCase.getForm().tasks"
      :show-header="false"
      stripe>
      <el-table-column
        prop="name"
        width="auto">
      </el-table-column>
      <el-table-column
        align="center"
        width="100px">
        <template slot-scope="record">
          <el-button
            size="mini"
            type="danger"
            @click="deleteTask(record.$index)">削除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

    import Translator from '@ts/Domain/Translator'
    import TodoUseCase from '@ts/Domain/UseCase/TodoUseCase'
    import GatewayLocator from '@ts/Domain/Gateway/GatewayLocator'

    export default {
        data() {
            return {
                todoUseCase: {},
                todoRules: {
                    name: [
                        {required: true, message: '入力必須です', trigger: 'blur'}
                    ]
                }
            }
        },
        created: function () {
            this.todoUseCase = new TodoUseCase(GatewayLocator.get('TodoRepository'), Translator.todoForm())
        },
        methods: {
            // タスク追加
            insertTask() {
                this.$refs.todo.validate((valid) => {
                    if (!valid) {
                        return
                    }

                    this.todoUseCase.addTodo()
                })
            },
            // レコード削除
            deleteTask(index) {
                this.todoUseCase.deleteTodo(index)
            }
        }
    }
</script>

<style scoped lang="scss">
  .main {
    width: 600px;
    margin: 0 auto;
  }
</style>