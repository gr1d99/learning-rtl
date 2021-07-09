class TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.valid?
      @todo.save

      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo

    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:name, :done)
  end
end
