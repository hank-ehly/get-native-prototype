class VideoScriptsController < ApplicationController
  before_action :set_video_script, only: [:show, :edit, :update, :destroy]

  # GET /video_scripts
  # GET /video_scripts.json
  def index

    if params[:videoId]
      vs = VideoScript.where(video_id: params[:videoId])  
    end
  
    render json: {
      videoScripts: vs.to_json(include: :collocations)
    }

  end

  # GET /video_scripts/1
  # GET /video_scripts/1.json
  def show
  end

  # GET /video_scripts/new
  def new
    @video_script = VideoScript.new
  end

  # GET /video_scripts/1/edit
  def edit
  end

  # POST /video_scripts
  # POST /video_scripts.json
  def create
    @video_script = VideoScript.new(video_script_params)

    respond_to do |format|
      if @video_script.save
        format.html { redirect_to @video_script, notice: 'Video script was successfully created.' }
        format.json { render :show, status: :created, location: @video_script }
      else
        format.html { render :new }
        format.json { render json: @video_script.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /video_scripts/1
  # PATCH/PUT /video_scripts/1.json
  def update
    respond_to do |format|
      if @video_script.update(video_script_params)
        format.html { redirect_to @video_script, notice: 'Video script was successfully updated.' }
        format.json { render :show, status: :ok, location: @video_script }
      else
        format.html { render :edit }
        format.json { render json: @video_script.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /video_scripts/1
  # DELETE /video_scripts/1.json
  def destroy
    @video_script.destroy
    respond_to do |format|
      format.html { redirect_to video_scripts_url, notice: 'Video script was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video_script
      @video_script = VideoScript.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def video_script_params
      params.require(:video_script).permit(:video_id, :language_id, :content, :original)
    end
end
