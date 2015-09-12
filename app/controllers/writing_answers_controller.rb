class WritingAnswersController < ApplicationController
  before_action :set_writing_answer, only: [:show, :edit, :update, :destroy]

  # GET /writing_answers
  # GET /writing_answers.json
  def index
    @writing_answers = WritingAnswer.where(language_module_id: params[:language_module_id])
    render json: {
      writing_answers: @writing_answers.to_json(include: :topic)
    }
  end

  # GET /writing_answers/1
  # GET /writing_answers/1.json
  def show
  end

  # GET /writing_answers/new
  def new
    @writing_answer = WritingAnswer.new
  end

  # GET /writing_answers/1/edit
  def edit
  end

  # POST /writing_answers
  # POST /writing_answers.json
  def create
    @writing_answer = WritingAnswer.new(writing_answer_params)

    if @writing_answer.save
      render json: {
        status: :created,
        notes: 'Writing answer was successfully created.',
        writing_answer: @writing_answer
      }
    else
      render json: {
        errors: @writing_answer.errors, 
        status: :unprocessable_entity 
      }
    end
  end

  # PATCH/PUT /writing_answers/1
  # PATCH/PUT /writing_answers/1.json
  def update
    respond_to do |format|
      if @writing_answer.update(writing_answer_params)
        format.html { redirect_to @writing_answer, notice: 'Writing answer was successfully updated.' }
        format.json { render :show, status: :ok, location: @writing_answer }
      else
        format.html { render :edit }
        format.json { render json: @writing_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /writing_answers/1
  # DELETE /writing_answers/1.json
  def destroy
    @writing_answer.destroy
    respond_to do |format|
      format.html { redirect_to writing_answers_url, notice: 'Writing answer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_writing_answer
      @writing_answer = WritingAnswer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def writing_answer_params
      params.require(:writing_answer).permit(:writing_answer, :language_module_id, :topic_id)
    end
end
